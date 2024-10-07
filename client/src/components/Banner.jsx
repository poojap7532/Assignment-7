import React from 'react'
import BannerCard from './BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-20'>
            {/* left side */}
            <div className=' space-y-8 h-full'>
                <h2 className='text-4xl font-bold leading-snug text-black'>
                    Buy and Sell Your Books<br/>
                    <span className='text-blue-700'>for the best prices</span>
                </h2>
                <p className='md:w-4/5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus temporibus esse voluptates, doloremque sequi blanditiis sit nesciunt accusamus incidunt enim rerum eos possimus inventore ipsa magni neque, eius natus minus voluptas maiores deleniti, harum quae! Saepe, eligendi. Dolor, maxime?
                </p>
                <div>
                    <input type='search' name='search' placeholder='search a book' className='py-2 px-2 rounded-s-sm outline-none' />
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
        </div>
        <div>
            <BannerCard/>
        </div>
    </div>
  )
}

export default Banner