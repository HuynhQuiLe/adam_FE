import React, { useState } from 'react'
import IOTDSpline from '../../components/Spline/IOTDSpline'
import IOTDSplineTest from '../../components/Spline/IOTDSplineTest'

const Details = () => {
    const [isWatch, setIsWatch] =useState(false)
  return (
    <section className='mt-[50px] mb-[100px]'>
        <div className='h-[40px] mb-[40px] flex items-center justify-between font-light'>
            <div className='h-full flex items-center'>
                <button className='border-[1px] border-black px-[20px] bg-white h-full rounded-[8px]'>Like</button>
                <div className=' relative h-[32px] w-[32px] mx-[10px]'>
                    <div className=' absolute top-0 left-0 w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center'>
                        <div className='w-[28px] h-[28px] bg-black rounded-full'></div>
                    </div>
                    <div className=' absolute top-0 left-[10px] w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center'>
                        <div className='w-[28px] h-[28px] bg-black rounded-full'></div>
                    </div>
                    <div className=' absolute top-0 left-[20px]  w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center'>
                        <div className='w-[28px] h-[28px] bg-black rounded-full'></div>
                    </div>
                </div>
                <p className='ml-[15px]'><strong className=' font-semibold'>+2261</strong> likes</p>
            </div>
            <div className='h-full'>
                <button className='border-[1px] border-black px-[20px] bg-white h-full rounded-[8px]'
                    onClick={() => setIsWatch(!isWatch)}
                >
                    {isWatch? 'Hide' : 'Watch'} 3D model
                </button>
            </div>
        </div>
        <div className='relative h-[80vh] w-full'>
            <div className=' bg-[rgba(255,255,255,0.7)] h-full'>
                <div className='flex items-center justify-center mt-[30px]'>
                    <p className='text-[18px]'>Distributed </p>
                    <small className='ml-[5px]'>by</small>
                    <div className='w-[32px] h-[32px] mx-[15px]'>
                        <img src="/img/small-logo-gray-white.svg" className='w-full h-full' alt="small-logo-gray-white" />
                    </div>
                    <p className='link-text text-[22px]'>adam.</p>
                </div>
                <div className='flex justify-center'> 
                    <h1 className='big-heading'>NIKE roshe 1  </h1>
                </div>
                <div className='flex justify-center'>
                    <p className='text-center sub-heading max-w-[360px]'>A menu is the principal UI interaction element that groups the navigation, guiding the user to their desired content on the website.</p>
                </div>
            </div>

            <div className={`absolute top-0 left-0 w-full min-h-[80vh] ${isWatch ? 'z-[0]' : '-z-[1]'}`}>
                {/* <IOTDSpline/> */}
                <IOTDSplineTest/>
            </div>
       </div>
    </section>
  )
}

export default Details