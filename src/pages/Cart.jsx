import React, { useState, useEffect } from 'react';
import Headermain from '../components/Headermain';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';

const Cart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate('');

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.data.attributes); 
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const newItem = {
      id: id,
      image: product.image,
      title: product.title,
      company: product.company,
      price: product.price,
      color: product.colors[0], 
      quantity: 1,
    };

    const updatedCartItems = [...cartItems, newItem];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    navigate('/cartt');
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div>
      <Headermain />
      <div className='flex w-[1000px] max-w-[1200px] mx-auto mt-11'>
        <h3 onClick={() => navigate('/')} className='cursor-pointer'>Home</h3>
        <h3 onClick={() => navigate('/products')} className='pl-4 cursor-pointer'>Products</h3>
      </div>
      {product && (
        <div className='flex w-[1100px] max-w-[1200px] mx-auto'>
          <div>
            <img className='w-[400px] h-[400px] rounded-xl' src={product.image} alt={product.title} />
          </div>
          <div>
            <h1 className='text-[40px] font-semibold pl-16'>{product.title}</h1>
            <h2 className='text-[20px] font-semibold pl-16 text-slate-200'>{product.company}</h2>
            <h3 className='text-[20px] font-semibold pl-16'>${product.price}</h3>
            <p className='w-[440px] pl-16'>{product.description}</p>
            <h2 className='text-[20px] font-semibold pl-16'>Colors</h2>
            <div className='flex pl-16 gap-3'>
              {product.colors.map((color, index) => (
                <button 
                  key={index} 
                  style={{ backgroundColor: color }} 
                  className='p-2 text-white rounded-md'
                ></button>
              ))}
            </div>
            <h2 className='text-[20px] font-semibold pl-16'>Amount</h2>
            <select className='select-secondary select-bordered select-md pl-16'>
              {[...Array(5).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>{x + 1}</option>
              ))}
            </select> 
            <br />
            <button onClick={addToCart} className='bg-blue-700 text-white btn-md rounded-lg ml-16'>Add to bag</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
