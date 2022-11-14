import React from 'react'
import './product.css'
import Carts from '../carts/Carts'

export default function Records({data,dataloaded,count,setCount}) {
    
    function cartcontrol(product){
        setCount(count+1)        
        var cartlist = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        cartlist.push(product)        
        localStorage.setItem('cart',JSON.stringify(cartlist))       

    }
    

  return (
    <>
    
        {dataloaded ? (
			<div class="row mb-5">
                <div className='col-lg-2'>

                </div>
				
				
						
                <div className='col-lg-8 col-md-12 col-xs-12 product'>
                    {
                        data.map((product) => {
                            return(
                                <div className="card text-lg-center col-xs-12">
                                    <div className="icons">
                                        <i class="heart fas fa-heart fa-1x"></i>
                                        <br/>
                                        
                                        <i class="heart fas fa-shopping-cart fa-1x" ></i>
                                        <br/>
                                        <i class="heart fas fa-share fa-1x"></i>
                                        

                                    </div>   
                                    
                            
                                    <img src= {`${product.url}`} alt=" " style={{width:"100%"}} />
                                    
                                    
                                    <button className='addtocart' onClick={()=>{
                                        cartcontrol(product)
                                    }}>Add to<i class=" cart fas fa fa-shopping-cart fa-lg" ></i></button>
                                    
                                    
                                    <div className='productDetails'>
                                        
            
                                        <span style={{color:"grey",textAlign:'center',fontSize:"15px"}}><h5>{product.title}</h5>{product.gender}
                                        <br/>
                                        Price - Rs.{product.price}</span>
                                        <center>
                                        
                                        <span className="fa fa-star checked" style={{fontSize:"13px"}}></span>
                                        <span className="fa fa-star checked" style={{fontSize:"13px"}}></span>
                                        <span className="fa fa-star checked" style={{fontSize:"13px"}}></span>
                                        <span className="fa fa-star" style={{fontSize:"13px"}}></span>
                                        <span className="fa fa-star" style={{fontSize:"13px"}}>review(2)</span>
                                        </center>
                                        
                                        
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                        
					
				
				</div>
			</div>):(<div>Fetching...</div>)}
   
    </>
    
  )
}
