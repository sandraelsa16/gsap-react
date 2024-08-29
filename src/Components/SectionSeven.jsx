import React from 'react'

const SectionSeven = () => {
  return (
    <section >
        <div className='contact-bg flex gap-10 flex-col items-center justify-center'>
            <h1 className='text-white text-5xl text-center'>Learn more about <br />investing with Binhoff</h1>
            <div className='flex gap-4'>
            <input className='bg-white w-80 px-6 rounded-lg outline-none py-4' type="text" placeholder='Enter Your Email'/>
            <button className='btn bg-black border border-gray-800 text-white px-20'>SignUp</button>
        </div>
        </div>
        
    </section>
  )
}

export default SectionSeven
