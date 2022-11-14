import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Product from '../../component/content/Product' 
import Footer from '../../component/content/Footer'
import AdminPanel from '../../component/Adminuser/AdminPanel'


export default function Dashboard() {
  const role = localStorage.getItem('role')
  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    {role === 'admin' ? (
      <AdminPanel/>

      ) : (
        <Product />

      )}
    
    <br/>
    <br/>
    <Footer/>
    </>
  )

}
