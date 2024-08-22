import React, { useState } from 'react'
import img1 from '../assets/img/hero1.webp'
import img2 from '../assets/img/hero2.webp'
import img3 from '../assets/img/hero3.webp'
import img4 from '../assets/img/hero4.webp'
import Headermain from '../components/Headermain'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function Home() {
  const navigate = useNavigate('')
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true);
  fetch('https://strapi-store-server.onrender.com/api/products?featured=true')
    .then(resp => resp.json())
    .then(data => {
      setCart(data.data)
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
  if (loading) {
    return <div className="loader"></div>
      ;
  }
  function handleClick(id) {
    navigate(`/cart/${id}`)
  }
  return (
    <>


      <Headermain></Headermain>
      <div className=' max-w-screen-xl ml-auto

      mr-auto flex'>
        <div className='mt-28 ml-16'>
          <h1 className='text-6xl w-3/5 font-semibold mt-4'>We are changing the way people shop</h1>
          <p className='text-1xl w-2/5 font-normal mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
          <button className="btn bg-blue-500 text-blue-100 mt-4">OUR PRODUCTS</button>
        </div>
        <div>
          <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 mt-24 mr-16 pl-80 h-4/1">
            <div className="carousel-item">
              <img
                src={img1}
                className="rounded-box w-80" />
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                className="rounded-box w-80" />
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                className="rounded-box w-80" />
            </div>
            <div className="carousel-item">
              <img
                src={img4}
                className="rounded-box w-80" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-screen-xl ml-auto
      mr-auto '>
          <h1 className='text-3xl mt-20'>Featured Products</h1>
          <hr className='mt-4 h-3' />
        </div>
        <div className='flex gap-11  max-w-screen-xl ml-auto mr-auto flex-wrap'>
          {
            cart.length > 0 && cart.map((value, index) => {
              return (
                <div key={index} onClick={() => handleClick(value.id)} className='w-96 h-80 shadow-current border-2 shadow-lg rounded-md cursor-pointer mt-1'>
                  <img className='w-80 h-56 rounded-md flex ml-auto mr-auto mt-5' src={value.attributes.image} alt="" />
                  <h1 className='text-2xl text-center pt-1'>{value.attributes.title}</h1>
                  <p className='text-center '>${value.attributes.price}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home