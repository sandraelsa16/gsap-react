import React, { useState } from 'react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'

const SectionFive = () => {

    const[isClick,setIsClick]=useState(false)
    const articles = [
        {id:1,img:img1,headline:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        {id:2,img:img2,headline:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        {id:3,img:img3,headline:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        {id:4,img:img4,headline:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        {id:5,img:img5,headline:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        {id:6,img:img6,headline:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    ]
  return (
    <section className='p-40 flex flex-col gap-20 items-center justify-center border-b border-gray-300'>
        <h1 className='text-4xl text-bold'>Actual news</h1>
        <div className='flex flex-wrap items-center justify-center gap-12'>{articles.map((article,index)=>{
            return(
                <div className={`${index >= 4 && !isClick ? "hidden" : ""} article flex flex-col gap-2 w-96`} key={article.id}>
                    <img className='min-h-[500px] max-h-[600px] h-full object-cover rounded-lg' src={article.img}alt="" />
                    <h3>{article.headline}</h3>
                    <button className='text-green-500 font-bold'>More Details</button>
                </div>  
            )
        })}</div>

        <button onClick={()=>setIsClick(!isClick)} className='btn border border-gray-300 px-12 mt-12'>See {isClick?"Less":"More"}</button>
    </section>
  )
}

export default SectionFive
