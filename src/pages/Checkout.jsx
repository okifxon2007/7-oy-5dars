import React, { useState } from 'react';
import Headermain from '../components/Headermain';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
  const shipping = 5.00;
  const tax = totalPrice * 0.1;
  const orderTotal = totalPrice + shipping + tax;

  const validateForm = () => {
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!address.trim()) {
      errors.address = 'Address is required';
    }
    return errors;
  };

  const handleOrder = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newOrder = {
      firstName,
      address,
      totalPrice,
      shipping,
      tax,
      orderTotal,
      date: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    existingOrders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    localStorage.removeItem('cartItems');
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('orderData');

    navigate('/orders');
  };

  return (
    <div>
      <Headermain />
      <div className='max-w-[1200px] mx-auto text-2xl mt-24'>
        <div>
          <h1>Place Your Order</h1>
          <hr />
        </div>
        <div className='flex'>
          <div>
            <br />
            <h2>Shipping Information</h2>
            <br />
            <form>
              <label className='text-sm'>First Name</label>
              <br />
              <input
                type="text"
                className={`border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 hover:border-blue-500 rounded-md text-sm p-2 outline-none w-[600px]`}
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setErrors({ ...errors, firstName: '' });
                }}
              />
              {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName}</p>}
              <br />
              <label className='text-sm'>Address</label>
              <br />
              <input
                type="text"
                className={`border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 hover:border-blue-500 rounded-md text-sm p-2 outline-none w-[600px]`}
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setErrors({ ...errors, address: '' });
                }}
              />
              {errors.address && <p className='text-red-500 text-sm'>{errors.address}</p>}
            </form>
            <br />
            <button
              onClick={handleOrder}
              className="w-[600px] text-white bg-blue-500 border border-blue-500 rounded-md p-2 text-lg hover:bg-blue-600"
            >
              Place Your Order
            </button>
          </div>
          <div>
            <div className="bg-blue-50 p-6 rounded-lg w-full max-w-md mx-auto ml-[120px] mt-[30px]">
              <div className="flex justify-between text-lg mb-2">
                <span>Subtotal</span>
                <span className='ml-[190px]'>${totalPrice.toFixed(2)}</span>
                <hr />
              </div>
              <div className="flex justify-between text-lg mb-2">
                <span>Shipping</span>
                <span className='ml-[235px]'>${shipping.toFixed(2)}</span>
                <hr />
              </div>
              <div className="flex justify-between text-lg mb-4">
                <span>Tax</span>
                <span className='ml-[250px]'>${tax.toFixed(2)}</span>
                <hr />
              </div>
              <div className="flex justify-between text-xl font-semibold">
                <span>Order Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
