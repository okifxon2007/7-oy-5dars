import React from 'react';
import Headermain from '../components/Headermain';

const Orders = () => {
  // Get all orders
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  return (
    <div>
      <Headermain />
      <div className='max-w-[1200px] mx-auto text-2xl mt-24'>
        <div>
          <h1>Order Details</h1>
          <hr />
        </div>
        <div className='mt-6'>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <div key={index} className=' mt-[30px]'>
                <h2 className='text-xl font-semibold'>Order {index + 1}</h2>
                <div className='mt-4 flex gap-64'>
                  <p className='text-sm'><strong className='text-slate-500 text-sm'>Name:</strong> <br /> {order.firstName}</p>
                  <p className='text-sm'><strong className='text-slate-500 text-sm'>Address:</strong> <br /> {order.address}</p>
                  <div className="flex justify-between text-lg mb-2">
                    <span className='text-sm'> <strong className='text-slate-500 text-sm'>Cost</strong> <br />${order.orderTotal.toFixed(2)}</span>
                  </div>
                  <p className='text-sm'><strong className='text-slate-500 text-sm'>Order Date:</strong> <br /> {order.date}</p>
                  
                </div>
                <div className='mt-4'>
                
                </div>
              </div>
            ))
          ) : (
            <p>No orders found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
