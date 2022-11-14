import React from "react";
import "./popup.css";
export default function Deletepopup({closepopup,productname}) {
  return (
    <div className="popup-container">
     <div className="popup-body">
      <div className="popup-header">
        <center>
      
        <br/>
        <br/>
        <br/>
        <br/>
        <h2><i className="fas fa-trash"style={{
            color:"red"
        }}/></h2>
        <br/>
        <h4>Are you sure you want to delete this product?
            <br/>
            <br/>
            <h4 style={{
                color:"green"
            }}>{productname}</h4>
        </h4>
        <br/>
        <br/>
        <button type="submit" className="btn btn-danger">Yes,Delete it</button>
        <button className="btn btn-info"  onClick={closepopup}>No, Keep it</button>
      
        </center>
      </div>
      
      
     </div>
    </div>
  );
};