import React from 'react'
import Title from './Title'
import Image from 'next/image'

const Features = () => {
  return (
    <section className='max-container padding-container py-20 gap-16 flex md:flex-row xs:flex-col'>
      {/* LEFT */}
      <div className='xs:w-full md:w-1/2 flex flex-col gap-8'>
        <div className='top'>
          <Title title='Fitur utama' subtitle='Kami Menawarkan Layanan Terbaik' />
          <p className='mt-8 opacity-50'>Kunjungi Wisata terbaik yang belum pernah anda kunjungi sebelumnya!</p>              
        </div>
        <div className='bottom'>
          <FeaturesCard title='Layanan Terbaik' subtitle='Kami menawarkan wisata terbaik dan sangat rekomendasi' />
          <FeaturesCard title='Jadwal Perjalanan Anda' subtitle='Wisata yang bagus dengan perjalanan sehat dan pemandangan asri' />
          <FeaturesCard title='Dapatkan diskon anda!' subtitle='Klik untuk mendapatkan diskon anda' />
        </div>
      </div>

      {/* RIGHT */}
      <div className='pt-14 relative right flex xs:w-full md:w-1/2'>
        <Image className='z-20 rounded-2xl w-[60%] h-[90%]' src='/1.jpg' alt='feature' width={500} height={500} />
        <Image className='z-30 rounded-5xl border-red-800 border-8 absolute w-[50%] h-[65%] top-[45%] left-[30%]' src='/3.jpg' alt='feature' width={500} height={500} />
     
      </div>
    </section>
  )
}

interface FeatureProps {
  title: string;
  subtitle: string;
}

const FeaturesCard = ({ title, subtitle} : FeatureProps) => {
  return (
    <div className='flex items-center xs:w-full xl:w-3/4 gap-4 p-6 rounded-3xl hover:border'>
     

      <div>
        <h4 className='text-2xl font-semibold'>{title}</h4>
        <p className='text-lg opacity-50'>{subtitle}</p>
      </div>
    </div>
  )
}

export default Features