import React from 'react'
import icon1 from '../assets/icon.png'
import icon2 from '../assets/financial.png'
import icon3 from '../assets/investment.png'
const SectionSix = () => {
  return (
    <section className='p-40'>
        <h1 className='text-6xl p-40 text-gray-800'>The unique investment opportunity</h1>
        <div className='flex gap-12 items-center justify-center p-12'>
            <div className="box">
                <img src={icon1} alt="" />
                <h3>Private Investors</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a quaerat eligendi commodi at, qui officia atque.
                </p>
                <button>View More</button>
            </div>
            <div className="box">
                <img src={icon2} alt="" />
                <h3>Private Investors</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a quaerat eligendi commodi at, qui officia atque.
                </p>
                <button>View More</button>
            </div>
            <div className="box">
                <img src={icon3} alt="" />
                <h3>Private Investors</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a quaerat eligendi commodi at, qui officia atque.
                </p>
                <button>View More</button>
            </div>
        </div>
    </section>
  )
}

export default SectionSix
