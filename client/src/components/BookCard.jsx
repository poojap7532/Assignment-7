// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const BookCard = ({headline, books}) => {
  console.log(books, 'bookkkk');

  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

        {/* cards */}
        <div>
           <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >

       <div> {
          books?.map((book) => {
            return(
             <SwiperSlide>
               <Link to='/'>
                <div>
                  <img src={book.imageURL} alt='img' />
                </div>
                <div>
                  <h3>{book.book_name}</h3>
                </div>
              </Link>
             </SwiperSlide>
            )
          })
        }</div>

      </Swiper>
        </div>
    </div>
  )
}

export default BookCard