import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'



export default function Login() {
  //value save garnalai
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false)
    const [emailvalue, setEmailValue] = useState('')
    const [passwordvalue, setPasswordValue] = useState('')

   

//email validation and set the stsatus
    function emailcheck(e){
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
    //password validation and set the status
    function passwordcheck(e){
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
    

//login handle garnalai

  function login_handle(e){
    e.preventDefault();
    console.log(email,password)
    if( !email || !password){
      
      if(!password){
        document.getElementById('passwords').innerHTML = 'valid password is required(min of length 8) with atleast one uppercase, one lowercase, one number'
      }
      if(!email){
        document.getElementById('emails').innerHTML = 'valid mail is required'
      }
      
    }
    else{
        document.getElementById('emails').innerHTML = ''
        document.getElementById('passwords').innerHTML = ''
        console.log(emailvalue,passwordvalue)
        //login request to backend and catch the response

        //for now fetching and checking the database and login if exists from frontend
        fetch('http://localhost:3001/users',{
            method:'get',
            
        }).then((res)=>res.json()).then((data)=>{
          console.log(data)
            
          if(true){  
          for (var i=0;i<data.length;i++){
            if(data[i].email === emailvalue && data[i].password === passwordvalue){
              localStorage.clear('cart')
              
              localStorage.setItem('user',data[i].name)
              localStorage.setItem('id',data[i].id)
              localStorage.setItem('role',data[i].role)


              
              window.location.href = '/';        

              
              
              break;
              
            }
            else{
              document.getElementById('passwords').innerHTML = 'The credentials does not match'
            }
            
            
          }
        }
          
         
          
          
            
        })
    }
    
  }  
  return (
    <div className="login">
        <div className="container mt-5 col-lg-4 col-md-6 col-xs-6">
        <h1>Login</h1>
        <form onSubmit={login_handle}>
            <span>Email*</span>
            <input id ="email" type="text" placeholder="Your Email" onChange={emailcheck} required />
            <p id="emails"></p>
            <span>Password*</span>
            <input id ="password" type="password" placeholder="Your Password" onClick={passwordcheck} />
            <p id="passwords"></p>
            <a href="#">Forgot Password?</a>
            <button type='submit'>Login</button>
            <span>Don't have an account?</span>
            <Link to='/register'><button className='regbtn'  required>Register</button></Link>
        </form>    
        </div>
    </div>    
  )
}
