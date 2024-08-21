import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Error from './pages/Error'
import Headercomp from './components/Headercomp'
function App() {
  const [token, settoken] = useState(localStorage.getItem('token'))
  
  return (
    <>
     <Headercomp></Headercomp>
    <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/about' element = {<About></About>}></Route>
      <Route path='/products' element = {<Products></Products>}></Route>
      <Route path='/cart/:id' element = {<Cart></Cart>}></Route>
      {
        token && <>
        <Route path='/checkout' element = {<Checkout></Checkout>}></Route>
      <Route path='/orders' element ={<Orders></Orders>}></Route>
        </>
        
      }
      <Route path='*' element ={<Error></Error>}></Route>
    </Routes>


    
    </>

   
  )
}

export default App