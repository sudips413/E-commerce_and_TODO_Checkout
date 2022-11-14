import React from 'react'
import axios from 'axios'
import Pagination from '../content/Pagination'
import Records from './Records'
import PopUp from '../popup/PopUp'
import { type } from '@testing-library/user-event/dist/type'

export default function AdminPanel() {
    const[data,setData] = React.useState([])
    const[dataloaded,setDataloaded] = React.useState(false)
    const [currentPage, setCurrentPage] = React.useState(1);
    const [recordsPerPage] = React.useState(8);
    const [popup,setpopup] = React.useState(false)
    const user = localStorage.getItem('user')
    React.useEffect(() => {
		axios.get('http://localhost:3001/products')
		.then(res => {
            setData(res.data)
            setDataloaded(true)
			console.log(res.data)
		})
		.catch(err => {
			console.log(err)
		})
	},[])
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)
    
  return (
    <><div className=" col-12">
        <div className='row'>
            <div className='col-12'>
            <center>
                <h2>Admin Panel</h2>
                <br/>
                <h4>
                Welcome to the admin panel, {user} . Here you can edit and delete products.

                
            </h4></center>
        </div>
        </div>
        <br/>
        <div className='row'>
            <div className='col-3'>
                <input type="number" className="form-control" placeholder="Search by ID" min="1" aria-label="Search by ID" aria-describedby="basic-addon2"/>
            </div>

            <div className='col-3'>
                <input type="text" className="form-control" placeholder="Search by Name" aria-label="Search by Name" aria-describedby="basic-addon2"/>
             </div>
             <div className='col-3'>
                <input type="number" className="form-control" placeholder="Search by Price" min="200" aria-label="Search by Price" aria-describedby="basic-addon2"/>
             </div> 
             <div className='col-3'>
                <button className='btn btn-primary mt-3'  onClick={()=>{
                    setpopup(true)
                    console.log(popup)
                }} ><i className='fas fa-1x fa-plus-circle'/>Add Product</button>
             </div>    
              
        </div>     
        <br/>
        <div className='row'>
            <div className='col-6 text-center'>
                <input type="file" id="file" accept=".csv" className='btn  mt-3' placeholder='Upload CSV File' style={{
                    
                    display:"none"                                   
                    

                }} required/>
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
                    }}><i className='fas fa-1x fa-file-csv text-center'/>Upload CSV File</label>
               
            </div>   
            <div className='col-3'>
                <button className='btn btn-white mt-3' style={{
                    backgroundColor:"#f0f0f0",
                }}><i className='fas fa-1x fa-plus-circle'/>{" "}Upload</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-primary mt-3'><i className='fas fa-1x fa-plus-circle'/>Download</button>
            </div>    
        </div>  
        
        

    
        <div className='row'>          
            
        
        <Records data={currentRecords} dataloaded={dataloaded}/>
        </div>
        

            <div className='pagination justify-content-center mb-5 mt-5'>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            </div>
           
    </div>
    {popup ? <PopUp closepopup={()=>{
            setpopup(false)
        }}/>: null}       
    </>

  )
}
