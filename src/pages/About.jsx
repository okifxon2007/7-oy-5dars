import React from 'react'
import Headermain from '../components/headermain'

const About = () => {
  return (
    <div>
      <Headermain></Headermain>
      <div className='max-w-screen-xl ml-auto

mr-auto'>
        <h1 className='text-7xl font-extrabold text-center mt-24'>We love <span className='bg-blue-500 text-blue-300 rounded-xl p-1'>comfy</span></h1>
        <p className='mt-10 w-1/2 text-lg justify-center ml-auto
        mr-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!</p>
      </div>
    </div>
  )
}

export default About