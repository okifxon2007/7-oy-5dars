import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/About'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Orders from '../pages/Orders'
import Checkout from '../pages/Checkout'
import { FaShoppingCart } from "react-icons/fa";
const Headermain = () => {
    const Navigate = useNavigate('')
    const [token, settoken] = useState(localStorage.getItem('token'))
    function handhome(e){
        e.preventDefault()
        Navigate('/')
    }
    function handabout(e){
        e.preventDefault()
        Navigate('/about')
    }
    function handprod(e){
        e.preventDefault()
        Navigate('/products')
    }
    function handcart(e){
        e.preventDefault()
        Navigate('/cart')
    }
    function handchek(e){
        e.preventDefault()
        Navigate('/checkout')
    }
    function handord(e){
        e.preventDefault()
        Navigate('/orders')
    }
    function crt(){
      Navigate('/cart')
  }
  return (
    <div>
        <div className='bg-blue-50'>
        <div className="navbar bg-base-100 max-w-screen-lg ml-auto
      mr-auto  bg-blue-50">
          <div className="flex-1 ">
            <a className="btn btn-ghost text-xl bg-blue-600 text-white ">C</a>
          </div>
          <div>
            <ul className='flex gap-14 mr-72 cursor-pointer'>
              <li onClick={handhome} className='text-blue-950 hover:bg-blue-950 hover:text-white p-1 duration-100 rounded-md'>Home</li>
              <li  onClick={handabout} className='text-blue-950 hover:bg-blue-950 hover:text-white p-1 duration-100 rounded-md'>About</li>
              <li onClick={handprod} className='text-blue-950 hover:bg-blue-950 hover:text-white p-1 duration-100 rounded-md'>Products</li>
              <li onClick={handcart} className='text-blue-950 hover:bg-blue-950 hover:text-white p-1 duration-100 rounded-md'>Cart</li>
            {
                token && <>
                  <li  onClick={handchek} className='text-blue-950 hover:bg-blue-950 hover:text-white p-1 duration-100 rounded-md'>Checkout</li>
              <li  onClick={handord} className='text-blue-950 hover:bg-blue-950 hover:text-white p-1 duration-100 rounded-md mr'>Orders</li>
                </>
            }
            </ul>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">


                <div className='flex gap-8'>
                  <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="synthwave" />

                    {/* sun icon */}
                    <svg
                      className="swap-off h-7 w-7 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path 
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                      className="swap-on h-7 w-7 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>



                  <FaShoppingCart onClick={crt} className='h-6 w-6'/>

                </div>
              </div>


            </div>

            <div className="dropdown dropdown-end">

              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headermain