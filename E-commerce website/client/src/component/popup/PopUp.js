import React from "react";
import "./popup.css";
export default function Popup({closepopup}) {
  return (
    <div className="popup-container">
     <div className="popup-body">
      <div className="popup-header">
        <center>
      <button className="close-btn mr-0"  onClick={closepopup}>X</button>
        <h3 className="text-center">Add Product</h3>
        <form>
          <div className="form-group">           
            
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name"/>
          </div>
          <div className="form-group">
            
            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Product Price"/>
          </div>
          <div className="form-group">
            
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Product Description"/>
          </div>
          <div className="form-group">
            
            <input type="file" className="form-control" 
            style={{
                display:"none"
            }} accept="image/png, image/gif, image/jpeg" placeholder="Upload Image"/>
            <label for="file"  style={{
                        backgroundColor:"white",
                        border: "dotted 2px green",
                        borderRadius: "5px",
                        padding: "7px",
                        cursor: "pointer",
                        width: "100%",
                        marginTop: "15px",
                        justifyContent: "center",
                        
                        color: "black",
                        fontSize: "20px",
                        fontWeight: "bold"
                    }}><i className='fas fa-1x fa-file  text-center'/>Upload Image</label>
          </div>
          <br/>
          <button type="submit" className="btn2 btn-primary">Add</button>

        </form>
      
        </center>
      </div>
      
      
     </div>
    </div>
  );
};