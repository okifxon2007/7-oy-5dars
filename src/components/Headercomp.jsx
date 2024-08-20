import React,{useEffect, useState} from 'react'

const Headercomp = () => {
    const [token, settoken] = useState(localStorage.getItem('token'))
    
  return (
    <div>
         {token && (
                <>
                     <div className='bg-slate-900 h-10'>
                <div className="flex gap-5 justify-end container mx-auto px-96">
                <p className='text-white pt-2'>Hello,</p>
                <button className='text-blue-600 bg-blue-900 w-28 h-8 rounded-md mt-1'>Logout</button>
            </div>
            </div>
                </>
            )}
            {!token && 
            <div className='bg-slate-900 h-10'>
                <div className="flex gap-5 justify-end container mx-auto px-96">
                <p className='text-white pt-2 gap-4 cursor-pointer'>Signin/Guest<span className='ml-5 cursor-pointer'>Craete Account</span></p>
            </div>
            </div>
            }
    </div>
  )
}

export default Headercomp