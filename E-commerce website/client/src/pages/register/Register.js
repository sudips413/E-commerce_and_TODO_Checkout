import React, {useState} from 'react'
import './Register.css'
import axios from 'axios'
import uuid from 'react-uuid'


import { Link } from 'react-router-dom';

export default function Register() {
  const [emailstat, setEmail] = useState(false);
  const [passwordstat, setPassword] = useState(false);
  const [namestat, setName] = useState(false);
  const [confirmpassword, setConfirmPassword] = useState('');
  

  //setting values
    const [email, setEmailValue] = useState("");
    const [password, setPasswordValue] = useState('');
    const [name, setNameValue] = useState('');
    const [existence, setexist] = useState([]);
    const [phnumber, setphnumber] = useState();
    React.useEffect(() => {
      axios.get('http://localhost:3001/users')
      .then(res => {
        
        res.data.map((item) => {
         existence.push(item.email)
        })

        
        
        
        
      })

      
      .catch(err => {
        console.log(err)
      })
    },[])
    React.useEffect(() => {
      console.log(existence)
    },[])
   


    
  function Register_handle (e){
    console.log(existence)
    e.preventDefault();
    console.log(namestat,emailstat, passwordstat)
    if(confirmpassword === password){
            if( !emailstat || !passwordstat || !namestat){
              
              if(!passwordstat){
                document.getElementById('passwords').innerHTML = 'valid password is required(min of length 8) with atleast one uppercase, one lowercase, one number'
              }
              if(!emailstat){
                document.getElementById('emails').innerHTML = 'valid mail is required'
              }
              if(!namestat){
                document.getElementById('names').innerHTML = 'Enter valid name with length greater than 5'
              }
            }
            else{
              
              if(existence.includes(email)){
                
                  alert('user already exists')
              }
                
                else{
                  axios.post('http://localhost:3001/users', {
                    id: uuid(),
                    name: name,
                    email: email,
                    password: password,
                    role: 'user',
                    phone: phnumber
                    


                  })
                  .then(res => {
                    console.log(res)
                    document.getElementById('success').innerHTML = 'Yay! Registration successful'
                            setTimeout(function(){
                                window.location.href = '/login';
                            }, 2000);
                  })
                  .catch(err => {
                    console.log(err)
                  })
                
                

              }  

                
            

                  
                

            }    
      }
      else{
        document.getElementById('passwords').innerHTML = 'passwords do not match'
      }   
     }
   
  function emailvalidator(e){

    var status = /\S+@\S+\.\S+/.test(e.target.value);
    console.log(status)
    setEmail(status);
    if(status){
      document.getElementById('email').style.border = '2px solid green';
      setEmailValue(e.target.value);

      
    }
    else{
        document.getElementById('email').style.border = '2px solid red';
    }

    
 }
    function namevalidator(e){
        var status =/^[a-zA-Z ]*$/.test(e.target.value)
        setName(status);
        if(e.target.value.length > 5 && status ){
            document.getElementById('name').style.border = '2px solid green';
            setNameValue(e.target.value);
        }
        else{
            document.getElementById('name').style.border = '2px solid red';
            

        }
    }
 
    function passwordvalidator(e){
        var status= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(e.target.value);
        console.log(status)
        setPassword(status);
        if(status){
            document.getElementById('password').style.border = '2px solid green';
            setPasswordValue(e.target.value);   
        }
        else{                
            document.getElementById('password').style.border = '2px solid red';
            
        }
    } 
    
  
  return (
    <div className="register" >
        <div className="container mt-5 col-lg-4 col-md-6 col-xs-6">
        <h1>SignUp</h1>
        <form onSubmit={Register_handle}>
            <span>Full Name <bold>*</bold>
            </span>
            <input id= "name" type="text" placeholder="Enter your name" onChange={namevalidator} required/>
            <p id="names"></p>
            <span>Phone Number <bold>*</bold></span>
            <div  style={{display:"flex"}}>
            <select name="countryCode" id="" style={{height:"30px", marginTop:"30px", marginLeft:"10px",borderRadius:"10%", width:"18%"}}>
              <option data-countryCode="GB" value="44" Selected>UK (+44)</option>
              <option data-countryCode="US" value="1">USA (+1)</option>
              <option data-countryCode="MZ" value="258">Moz (+258)</option>
              <option data-countryCode="MN" value="95">My (+95)</option>
              <option data-countryCode="NA" value="264">Nam (+264)</option>
              <option data-countryCode="NR" value="674">Nauru (+674)</option>
              <option data-countryCode="NP" value="977">Nep(+977)</option>
              <option data-countryCode="NL" value="31">NL (+31)</option>
              <option data-countryCode="NC" value="687">NC (+687)</option>
            </select>  
            <input type="tel" id="phone" name="phone" style={{width:"70%"}} placeholder="9860817106" pattern="[0-9]{10}" required onChange={(e)=>{
              setphnumber(e.target.value)

            }}/>

            </div>
            
            <span>Email<bold>*</bold></span>

            <input id="email"type="text" placeholder="sampleemail@gmail.com" onChange={emailvalidator} required/>
            <p id="emails"></p>
            <span>Password <bold>*</bold></span>
            <input id="password" type="password" placeholder="your password" onChange={passwordvalidator} required/>
            <span>Confirm Password <bold>*</bold></span>
            <input id="password1" type="password" placeholder="your password" onChange={(e)=>{
              if(e.target.value === password){
                document.getElementById('password1').style.border = '2px solid green';
              }
              else{
                document.getElementById('password1').style.border = '2px solid red';
              }
              setConfirmPassword(e.target.value)            

            }} required/>
            <p id="passwords"></p>
            <input type="code" placeholder="Enter referral code" name="name"/>
            <div className="agreecheck">
            
                <input class="tickbox"type="checkbox" name="remember" required/> <span class="msg"> I agree agree to all terms and condition</span>
            
            </div>
            
            
            <button className='regbtn' type='submit' >Register</button>
        </form>  
        <p id="success"style={{color:'green', fontWeight:'bold'}}></p>  
        <span style={{fontWeight:"bold", fontSize:"18px"}}> Already have an account?</span>
        <Link to='/login'><button  required>Login</button></Link>
        
        </div>
    </div>    
  )
}
