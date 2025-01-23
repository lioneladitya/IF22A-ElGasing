'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image';
import { Carousel } from 'flowbite-react';

const Testimonials = () => {
  return (
    <section className='flex flex-col items-center gap-20 bg-testimonial mt-10 relative w-full h-[800px]'>
      {/* <div className='bg-testimonial h-screen w-screen left-[-3%]  ' /> */}
      
      <div className='px-14 text-center'>
        <Title title='testimoni' subtitle='Beberapa FeedBack Pelanggan' />
      </div>

      <div className='xs:px-4 md:px-40 h-[400px] w-full'>
        <Carousel pauseOnHover slideInterval={2000} className='py-4'>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="/adit.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Lionel Aditya </span> / Travel Enthusiast</h1>
            <div className='flex gap-2'>
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
            </div>            
            <p className='text-lg lg:w-3/4 xl:w-1/2 text-center'>"Awalnya bingung mau liburan ke mana, tapi berkat Lamskuyy saya jadi tahu banyak tempat wisata di Lampung. Liburan keluarga kami jadi tak terlupakan!"</p>
          </div>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="/arkan1.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Arkan Syahrul</span> / Travel Enthusiast</h1>
            <div className='flex gap-2'>
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
            </div>            
            <p className='text-lg lg:w-3/4 xl:w-1/2 text-center'>"Lamskuyy benar-benar bikin traveling ke Lampung jadi lebih mudah. Panduan wisatanya praktis, bikin liburan kita lancar dan memorable!"</p>
          </div>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="/aldion.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Aldion Izha </span> / Model</h1>
            <div className='flex gap-2'>
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
            </div>            
            <p className='text-lg lg:w-3/4 xl:w-1/2 text-center'>"Kalau mau liburan ke Lampung, jangan lupa buka Lamskuyy dulu. Semua destinasi favorit mulai dari pantai, gunung, hingga kuliner khas Lampung ada di sini. Lengkap banget!"</p>
          </div>
        </Carousel>     
      </div>
    </section>
  )
}


export default Testimonials