import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Nominees = () => {
  return (
    <section className=' min-h-[100vh] mt-[50px]'>
      <p className=' normal-text text-center'>Latest</p>
      <div className='flex justify-center'>
        <div className='w-fit relative' >
          <h1 className='big-heading'>NOMINEES</h1>
          <span className='absolute block bg-[#FED11B] text-black py-[20px] px-[28px] font-semibold text-[18px] rounded-[8px] rotate-[-10deg] right-[-20px] bottom-[10px]' >Cool Items!</span>
        </div>
      </div>
      <p className='text-center sub-heading'>Vote for the latest items on <br/> adam</p>
      <div id="slider" className='py-[100px]'>
        <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        height={400}
      >
        <SwiperSlide>
          <div className='pb-[100px]'>
            <div className='w-full h-[300px] bg-black text-white rounded-[8px] flex items-center justify-center'>SLIDE 1</div>
            <div className='flex gap-[15px] mt-[20px] flex-wrap'>
              <p className='text-[21px] font-semibold'>Goodbye Love</p>
              <p className='flex items-center gap-[15px]' ><small>by</small> <span className='w-[32px] h-[32px] rounded-full bg-black'></span> <span className='text-[21px] link-text inline-block'>Claudio Guglieri</span> <sup className='uppercase text-[10px]'>pro</sup> </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pb-[100px]'>
            <div className='w-full h-[300px] bg-black text-white rounded-[8px] flex items-center justify-center'>SLIDE 1</div>
            <div className='flex gap-[15px] mt-[20px] flex-wrap'>
              <p className='text-[21px] font-semibold'>Goodbye Love Goodbye</p>
              <p className='flex items-center gap-[15px]' ><small>by</small> <span className='w-[32px] h-[32px] rounded-full bg-black'></span> <span className='text-[21px] link-text inline-block'>Claudio Guglieri</span> <sup className='uppercase text-[10px]'>pro</sup> </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pb-[100px]'>
            <div className='w-full h-[300px] bg-black text-white rounded-[8px] flex items-center justify-center'>SLIDE 1</div>
            <div className='flex gap-[15px] mt-[20px] flex-wrap'>
              <p className='text-[21px] font-semibold'>Love </p>
              <p className='flex items-center gap-[15px]' ><small>by</small> <span className='w-[32px] h-[32px] rounded-full bg-black'></span> <span className='text-[21px] link-text inline-block'>Claudio Guglieri</span> <sup className='uppercase text-[10px]'>pro</sup> </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pb-[100px]'>
            <div className='w-full h-[300px] bg-black text-white rounded-[8px] flex items-center justify-center'>SLIDE 1</div>
            <div className='flex gap-[15px] mt-[20px] flex-wrap'>
              <p className='text-[21px] font-semibold'>Love </p>
              <p className='flex items-center gap-[15px]' ><small>by</small> <span className='w-[32px] h-[32px] rounded-full bg-black'></span> <span className='text-[21px] link-text inline-block'>Claudio Guglieri</span> <sup className='uppercase text-[10px]'>pro</sup> </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pb-[100px]'>
            <div className='w-full h-[300px] bg-black text-white rounded-[8px] flex items-center justify-center'>SLIDE 1</div>
            <div className='flex gap-[15px] mt-[20px] flex-wrap'>
              <p className='text-[21px] font-semibold'>Love </p>
              <p className='flex items-center gap-[15px]' ><small>by</small> <span className='w-[32px] h-[32px] rounded-full bg-black'></span> <span className='text-[21px] link-text inline-block'>Claudio Guglieri</span> <sup className='uppercase text-[10px]'>pro</sup> </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pb-[100px]'>
            <div className='w-full h-[300px] bg-black text-white rounded-[8px] flex items-center justify-center'>SLIDE 1</div>
            <div className='flex gap-[15px] mt-[20px] flex-wrap'>
              <p className='text-[21px] font-semibold'>Love </p>
              <p className='flex items-center gap-[15px]' ><small>by</small> <span className='w-[32px] h-[32px] rounded-full bg-black'></span> <span className='text-[21px] link-text inline-block'>Claudio Guglieri</span> <sup className='uppercase text-[10px]'>pro</sup> </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  )
}

export default Nominees