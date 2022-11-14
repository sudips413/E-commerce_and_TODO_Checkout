import React, { useEffect } from 'react'
import Deletepopup from '../popup/Deletepopup'
import './admin.css'


export default function Records({data,dataloaded}) {
    const [btnvalue,setbtnvalue] = React.useState([])
    const [popup,setpopup] = React.useState(false)
    const [deleteitem,setdeleteitem] = React.useState('')
    useEffect(() => {
        
        
         
        var btnlist=[]
        data.map((item)=>{
            btnlist.push('on')
        })
        setbtnvalue(btnlist)
        console.log(btnlist)
    },[data])

        
    
  return (
    
    <>
    <div className='col-12'>
            <div className='row' style={{
                backgroundColor: 'white',
            }}>
                <table className='table table-hover'>
                    <thead style={{backgroundColor:"skyblue"}}>
                        <tr>
                            <th scope="col-">ID</th>
                            <th scope="col-2">Name</th>
                            <th scope="col-2">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock</th>

                            <th scope="col">Status</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Details</th>
                            <th scope="col">Published</th>
                            <th scope="col-2">Actions</th>

                              
                        </tr>
                    </thead>
                    <tbody>
                        {dataloaded ? data.map((item,index) => {
                            return (
                                <tr style={{alignItem:"center",fontWeight:"600"}} >
                                    <th scope="row">{item.id}</th>
                                    <td >
                                        <img src={`${item.url}`} alt="" style={{ width: '50px', height: '50px',borderRadius:"50%" }} />
                                           
                                        {item.title}</td>
                                    <td>{item.category}</td>
                                    <td style={{color:"blue"}}>Rs. {item.price}</td>
                                    <td>{item.stock}</td>
                                    <td>
                                        <button className='' style={{backgroundColor:"#a4e3b8",width:"60px", height:"25px", fontSize:"13px",color:"#02531c",border:"0px",marginTop:"5px"}} disabled>selling</button>
                                    </td>
                                    <td>{item.discount}</td>
                                    <td ><i class="fa fa-info-circle" aria-hidden="true"></i></td>
                                    
                                    <td>
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitches"/>
                                        <label class="custom-control-label" for="customSwitches"></label>
                                    </div>
                                        {/* <input type="button" id="1" onClick={ ()=>{
                                            if(btnvalue[index] === "on"){
                                                btnvalue[index] = "off"
                                                document.getElementById("1").style.backgroundColor = "black"
                                            }
                                            else{
                                                btnvalue[index] = "on"
                                                document.getElementById("1").style.backgroundColor = "green"
                                                
                                            }
                                        }
                                        }
                                            

                                      style={{width:"60px", height:"25px",backgroundColor:"green", fontSize:"13px",border:"0px",marginTop:"5px"}}/> */}
                                        
                                        
                                    </td>
                                    <td style={{color:'red',}}>
                                        <i className='fas fa-1x fa-edit' style={{
                                            color: 'green',
                                            marginRight: '10px',
                                        }}/>
                                        <i className='fas fa-1x fa-trash' onClick={()=>{
                                            setpopup(true)
                                            setdeleteitem(item.title)
                                            
                                        }}/>
                                    </td>
                                </tr>
                            )
                        }) : <tr><td>Loading...</td></tr>}  
                    </tbody>
                </table>
                {popup ? <Deletepopup closepopup={()=>{
            setpopup(false)
        }} productname={deleteitem}/>: null}


                                   
            </div>    
        </div>
        <br/>
        <br/>
    
         
            
         
         
       

    </>
    )
}
