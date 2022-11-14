import axios from 'axios'
import React from 'react'
import './product.css'
import Pagination from './Pagination'
import Records from './Records'

export default function Product() {
	const[data,setData] = React.useState([])
	const[dataloaded,setDataloaded] = React.useState(false)
	const[count,setCount] = React.useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0)
	const [currentPage, setCurrentPage] = React.useState(1);
    const [recordsPerPage] = React.useState(6);
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

	
	// componentDidMount(){

	//     axios.get('http://localhost:3001/products')
	//     .then(res => {
	//         this.setState({
	//             data: res.data,
	//             dataloaded: true
	//         })
	//         console.log(this.state.data)
	//     })
	//     .catch(err => {
	//         console.log(err)
	//     })

	// }
	
	React.useEffect(() => {
		axios.get('http://localhost:3001/products')
		.then(res => {
			setData(res.data)
			setDataloaded(true)
		})
		.catch(err => {
			console.log(err)
		})
	},[])
	const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)
	

	return(
		<> <div className='cartcounter'>
			<span class="cart-basket text-center">
				<h4>{count}</h4>
		  	</span>
		    <i class="fas fa-2x fa-shopping-cart " onClick={cartclick} ></i>
			<br/>
			<br/>
		  	
			</div>	
			<br/>
			<br/>
			
			<Records data={currentRecords} count={count} setCount={setCount} dataloaded={dataloaded}/>
			<div className='pagination justify-content-center mb-5'>
			<Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
			</div>
			
		</>
		)
	
	
	}
	

