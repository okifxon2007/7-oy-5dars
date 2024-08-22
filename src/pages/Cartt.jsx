// Cartt.js
import React, { useState, useEffect } from 'react';
import Headermain from '../components/Headermain';
import { useNavigate } from 'react-router-dom';

const Cartt = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
    calculateTotalPrice(storedCartItems);
  }, []);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
    localStorage.setItem('totalPrice', total);  // Saqlash
  };

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    calculateTotalPrice(updatedCartItems);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    calculateTotalPrice(updatedCartItems);
  };

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <Headermain />
      <div className="container mx-auto mt-8 max-w-[1200px] mx-auto">
        {cartItems.length === 0 ? (
          <h1 className='text-xl'>Place your order</h1>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-300 py-4 max-w-[1200px] mx-auto">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.company}</p>
                  <div className="flex items-center mt-2">
                    <p>Color:</p>
                    <span
                      style={{ backgroundColor: item.color }}
                      className="inline-block w-4 h-4 ml-2 rounded-full"
                    ></span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-[380px]">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                    className="border rounded-md p-1"
                  >
                    {[1, 2, 3, 4, 5].map((qty) => (
                      <option key={qty} value={qty}>
                        {qty}
                      </option>
                      
                    ))}
                    
                  </select> <br />
                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-500 hover:underline mr-8"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
        <div className="flex justify-end mt-8">
          <div className="w-64 p-4 bg-blue-50 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Subtotal: ${totalPrice.toFixed(2)}</p>
            <p>Shipping: $0.00</p>
            <p>Tax: ${(totalPrice * 0.1).toFixed(2)}</p>
            <hr className="my-2" />
            <p className="text-xl font-bold">Order Total: ${(totalPrice + 0 + totalPrice * 0.1).toFixed(2)}</p>
            <button onClick={goToCheckout} className="bg-blue-600 text-white w-full py-2 rounded-md mt-4">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartt;
