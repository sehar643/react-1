import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Newproducts = () => {
  return (
    <div >
        <h1>New Products</h1>
        <div className='proPage'>
            <Link to='/women'>Women</Link>
            <Link to='/men'>MEN</Link>
            <Link to='/shoes'>Shoes</Link>
        </div>

        <Outlet />
    </div>
  )
}

export default Newproducts