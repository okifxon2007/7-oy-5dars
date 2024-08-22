import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
const Headermain = () => {
  function toggleDarkMode() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      htmlElement.setAttribute('data-theme', 'light');
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
    }
  }

  const Navigate = useNavigate('')
  const [token, settoken] = useState(localStorage.getItem('token'))
  function handhome(e) {
    e.preventDefault()
    Navigate('/')
  }
  function handabout(e) {
    e.preventDefault()
    Navigate('/about')
  }
  function handprod(e) {
    e.preventDefault()
    Navigate('/products')
  }
  function handcart(e) {
    e.preventDefault()
    Navigate('/cartt')
  }
  function handchek(e) {
    e.preventDefault()
    Navigate('/checkout')
  }
  function handord(e) {
    e.preventDefault()
    Navigate('/orders')
  }

  return (
    <div>
      <div className='bg-blue-50'>
        <div className="navbar  max-w-screen-lg ml-auto
      mr-auto bg-blue-50">
          <div className="flex-1 ">
            <a className="btn btn-ghost text-xl bg-blue-600 text-white ">C</a>
          </div>
          <div>
            <ul className='flex gap-4 mr-72 cursor-pointer'>
              <li onClick={handhome} className='text-blue-950 hover:bg-blue-950 hover:text-white p-1 duration-100 rounded-md'>Home</li>
              <li onClick={handabout} className='text-blue-950 hover:bg-blue-950 hover:text-white p-1 duration-100 rounded-md'>About</li>
              <li onClick={handprod} className='text-blue-950 hover:bg-blue-950 hover:text-white p-1 duration-100 rounded-md'>Products</li>
              <li onClick={handcart} className='text-blue-950 hover:bg-blue-950 hover:text-white p-1 duration-100 rounded-md'>Cart</li>
              {
                token && <>
                  <li onClick={handchek} className='text-blue-950 hover:bg-blue-950 hover:text-white p-1 duration-100 rounded-md'>Checkout</li>
                  <li onClick={handord} className='text-blue-950 hover:bg-blue-950 hover:text-white p-1 duration-100 rounded-md mr'>Orders</li>
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
                    <label className="swap swap-rotate">
                      <input type="checkbox" onChange={toggleDarkMode} />
                      <FaShoppingCart className='h-6 w-6' />
                    </label>

                  </label>




                  <FaShoppingCart className='h-6 w-6' />

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