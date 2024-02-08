import React from 'react'
import IOTDSpline from '../../components/Spline/IOTDSpline'


const IOTD = () => {
  return (
    <section>
        <img src="/img/IOTD.svg" alt="" />
        <div className="marquee">
            <span className='font-light text-back_gray'>
                <strong className=' font-semibold text-black uppercase'>Adam Same&nbsp;</strong>
                — Item of the Day -&nbsp;
                <strong className=' font-semibold text-black uppercase'>7.91&nbsp;</strong>
                — Dec 22, 2023 —&nbsp;
            </span>
            <span className='font-light text-back_gray'>
                <strong className=' font-semibold text-black uppercase'>Adam Same&nbsp;</strong>
                — Item of the Day -&nbsp;
                <strong className=' font-semibold text-black uppercase'>7.91&nbsp;</strong>
                — Dec 22, 2023 —&nbsp;
            </span>
            <span className='font-light text-back_gray'>
                <strong className=' font-semibold text-black uppercase'>Adam Same&nbsp;</strong>
                — Item of the Day -&nbsp;
                <strong className=' font-semibold text-black uppercase'>7.91&nbsp;</strong>
                — Dec 22, 2023 —&nbsp;
            </span>
            <span className='font-light text-back_gray'>
                <strong className=' font-semibold text-black uppercase'>Adam Same&nbsp;</strong>
                — Item of the Day -&nbsp;
                <strong className=' font-semibold text-black uppercase'>7.91&nbsp;</strong>
                — Dec 22, 2023 —&nbsp;
            </span>
        </div>
        <div className='relative w-full' >
            <div className='max-h-[100vh]'>
                <IOTDSpline />
            </div>
           <div className='absolute bottom-[50px] flex items-center justify-center w-full'>
            <p className='group text-[22px] link-text'>
                Nike Reshoe 1
            </p>
           </div>
        </div>
    </section>
  )
}

export default IOTD