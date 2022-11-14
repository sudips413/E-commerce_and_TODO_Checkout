import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
    const user =localStorage.getItem("user");
    const role = localStorage.getItem("role");
    
    

    function logout(e){
        e.preventDefault();
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('cart');
        localStorage.removeItem('cartcount');
        localStorage.removeItem('id');
        localStorage.removeItem('role');
        window.location.href = '/';
        

    }
    function cartclick(e){
        e.preventDefault()
        var name = localStorage.getItem('user')
        if(name){
        window.location.href = '/cart'
        }
        else{
            window.location.href = '/login'
        }
    }
    
  return (
    <div className='navbar bar fixed-top'>
        <div id="dropdown"className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                <i className="topIcon fa fa-search"></i>
                
                </li>
                <li className="topListItem">
                <input className='search' type="text" placeholder="Search.."></input>
                </li>
                
            </ul>
        </div>
        <div className="topRight2">
                
        {user ? (
            
            
            <ul className="topList">
                <li className="topListItemname" >
                    {user}<i className="topIcon fa fa-user"></i>
                   
                </li> 
                <li className="topListItem">
                    <i className="topIcon fa fa-bell " style={{marginTop:"10px"}}/>
                </li>  
                <li className="topListItem">
                    <span style={{color:"red",fontSize:"15px",marginTop:"4px", marginLeft:'-20px',fontWeight:"bold"}}>5</span> 
                </li> 
                
                {role === "admin" ? (
                    <li className="topListItem">
                        
                     </li>
                ):(  
                       

                    
                    
                    <li className="topListItem">
                    <i className="topIcon fa fa-shopping-cart" onClick={cartclick} style={{marginTop:"10px"}}/>
                    </li> 
                        
                       
                    )}
                     

                                 
                <li className="topListItem">
                    <Link  onClick={logout}>
                    <i className='fa fa-sign-out'></i></Link>
                </li>

            </ul>
            
            ) : (
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/login">
                    LOGIN
                    </Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/register">
                    REGISTER
                    </Link>
                </li>
            </ul>

            
            )}
            
        </div>
    </div>    

  )
}
