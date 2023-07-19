import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-cover custom-img'>
        {/* OVERLAY */}
        <div className='absolute top-10 left-0 right-0 bottom-0 bg-black/40 z-[2]'/>
        <div className='p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]'>
            <h2 className='text-5xl font-semibold'>{heading}</h2>
            <p className= 'py-5 text-xl'>{message}</p>
            <button className="px-8 py-2 border">book</button>
        </div>
    </div>
  )
}

export default Hero