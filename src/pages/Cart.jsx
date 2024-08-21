import React, { useState, useEffect } from 'react';
import Headermain from '../components/Headermain';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css'
const Cart = () => {
  const { id } = useParams();
  const [cart, setCart] = useState([]); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate('')
  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setCart([data.data]); 
        
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [id]);
  if (loading) {
    return <div className="loader"></div>
  ;
  }
  function handhome(){
    navigate('/')
  }
  function handprod(){
    navigate('/products')
  }

  return (
    <div>
      <Headermain />
      <div className='flex w-[1000px] max-w-[1200px] mx-auto mt-11'>
      <h3 onClick={handhome} className='cursor-pointer'>Home</h3>
      <h3 onClick={handprod} className='pl-4 cursor-pointer'>Products</h3> <br /> <br />
      </div>
      {cart.length > 0 && cart.map((value, index) => (
        <div key={index} className='flex w-[1100px] max-w-[1200px] mx-auto'>
          <div>
            <img className='w-[400px] h-[400px] rounded-xl' src={value.attributes.image} alt="" />
          </div>
          <div>
          <h1 className='text-[40px] font-semibold pl-16'>{value.attributes.title}</h1>
          <h2 className='text-[20px] font-semibold pl-16 text-slate-200'>{value.attributes.company}</h2>
          <h3 className='text-[20px] font-semibold pl-16'>${value.attributes.price}</h3>
          <p className='w-[440px] pl-16'>{value.attributes.description}</p> <br />
          <h2 className='text-[20px] font-semibold pl-16'>Colors</h2>
          <div className='flex pl-16 gap-3'>
          <button style={{ backgroundColor: value.attributes.colors[0] }} className='p-2 text-white rounded-md'></button>
          <button style={{ backgroundColor: value.attributes.colors[1] }} className='p-2 text-white rounded-md'></button>
          <button style={{ backgroundColor: value.attributes.colors[2] }} className='p-2 text-white rounded-md'></button>
          </div>
          <h1>{value.attributes.value}</h1>
          <h2 className='text-[20px] font-semibold pl-16'>Amount</h2>
          <select className='select-secondary select-bordered select-md pl-16'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select> 
          <br />
          <button className='bg-blue-700 text-white btn-md rounded-lg ml-16'>Add to bag</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
