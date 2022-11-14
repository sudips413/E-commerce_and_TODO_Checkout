import React, { useState, useEffect } from "react";
import './carts.css'

const Carts = () => {
   const[cart,setCart] = useState([])
   
   
   
    const [subtotal,setsubtotal]=useState(0)
    const [qty,setqty]=useState([])
    

    
    React.useEffect(() => {
        var cartlist=localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        setCart(cartlist)
        var total=0; 
        var qtylist=[]
        cartlist.map((item)=>{           
            
            total=total+item.price
            qtylist.push(1)
            
            


        })
        setsubtotal(total)
        setqty(qtylist)
        
    },[])
    
    
   

  return (
    <>
    <div className="cartitemdisplay col-lg-12 col-md-12 col-xs-12 mt-5 ">
        <div>
            <center>
            <table className="table col-lg-10 col-md-12 col-xs-12">
                <thead style={{backgroundColor:"lightgreen"}}>
                    <tr>
                        <th>Product</th>
                        
                        <th>Price</th>
                        <th style={{textAlign:"center"}} >Quantity</th>
                        <th>Total Price</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody className=" col-lg-12 col-md-12 col-xs-12">
                    {cart.map((product,index) => {

                        
                        
                        return(
                            
                            
                            <tr key={index}>
                                <td>
                                    <div className="row">
                                        <div >
                                            <img src={product.url} alt=" " style={{width:"80px",height:"80px",marginLeft:"5px"}} />
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-xs-4">
                                            <h4 className="nomargin ml-5">{product.title }</h4>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                </td>

                                <td style={{fontWeight:"bold"}}class='col-lg-1 col-md-4 col-xs-4'>Rs. {product.price}</td>
                                <td className="col-lg-3 col-md-3 col-xs-2" >
                                    <div  style={{display:"flex"}}>
                                    <span style={{marginTop:"-8px",fontWeight:"900",marginRight:"10px"}} onClick={()=>{if (qty[index] ===1){
                                        (qty[index]=1)
                                        
                                        

                                    }
                                    else{
                                        
                                        qty[index]=qty[index]-1
                                        
                                        setsubtotal(subtotal-product.price)
                                        
                                        
                                        
                                        
                                    }    
                                    }}>-</span> {qty[index]} <span style={{marginTop:"-8px",fontWeight:"bold",marginLeft:"10px"}} onClick={()=>{
                                        
                                        qty[index]=qty[index]+1
                                        setsubtotal(subtotal+product.price)
                                        
                                    }}>+</span>
                                    
                                    </div>
                                </td>
                                
                                
                                <td style={{fontWeight:"bold"}}>Rs. {qty[index]*product.price}</td>
                                
                                
                                <td ><button className="btn btn-warn butt " onClick={()=>{
                                    var cartlist = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
                                    cartlist = cartlist.filter((item) => item.id !== product.id)
                                    localStorage.setItem('cart',JSON.stringify(cartlist))
                                    localStorage.removeItem({product})
                                    window.location.reload()
                                }}><i className="fa fa-trash"></i></button></td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
            </center>
                       
                    


        </div> 
        <br/>
        <br/>
        <div className="row">
                <div className="col-lg-1 col-md-4 col-xs-6">
                </div>
                <div className="col-lg-4 col-md-4 col-xs-6">
                    <button className="btn btn-dark" onClick={()=>{
                        window.location.href = '/'
                    }}><i className="fa fa-angle-left">  </i> Continue Shopping</button>
                </div>
                <div className="col-lg-2 col-md-4 col-xs-6">
                </div>
                <div className="col-lg-2 col-md-4 col-xs-6">
                </div>
                
                <div className="col-lg-2 col-md-4 col-xs-4">
                   <button className="btn btn-white border-dark" onClick={()=>{
                    localStorage.removeItem('cart')
                    window.location.reload()
                   }}>Clear Cart</button>
                </div>
                <div className="col-lg-2 col-md-4 col-xs-6">
                </div>

        </div>
        <div className="row">
                 <div className="col-lg-1 col-md-2 col-xs-2 ml-auto">
                </div> 
                <div className="col-lg-4 col-md-4 col-xs-4 ">
                    <h3>Coupon Discount</h3>
                    <h4>Enter the coupon code if you have</h4>
                    <span>
                        <input  type="text" className="form-control col-6" placeholder="Enter Coupon Code" />
                        <br/>
                        <button className="btn btn-dark col-4" style={{marginTop:"10px"}}>Apply</button>
                    </span>
                    

                    
                    
                </div>
                <div className="col-lg-2 col-md-2 col-xs-2 ml-auto">
                </div>    
            
                    
                <div className="col-lg-4 col-md-4 col-xs-4 ml-auto">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>Rs. {subtotal}</td>
                            </tr>
                            
                            <tr>
                                <td>Total</td>
                                <td style={{color:"blue", fontWeight:"bold"}}>Rs. {subtotal}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-dark col-lg-8 col-md-12 btn-block">Proceed to Checkout</button>
                    
                </div>
                <div className="col-lg-2 col-md-2 col-xs-2 ml-auto">
                </div>
        </div>


    </div>

        
    </>
    
  )
};

export default Carts;