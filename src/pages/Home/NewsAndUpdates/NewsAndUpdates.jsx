import React from 'react'
import News from './News'
import Creators from './Creators'
import Feature from './Feature'

const NewsAndUpdates = () => {
  return (
    <section className='mt-[50px] pb-[50px]'>
      <p className='  normal-text mb-[16px]'>News and Updates</p>
      <div className='flex items-end justify-between'>
        <h2 className='small-heading'>Follow what's brand<br/>
            new in digital design.
        </h2>
        <p className=' normal-text'>Don't miss the <strong className='font-semibold'>latest</strong> happenings on <strong className='font-semibold'>adam.</strong></p>
      </div>
      <div className='flex justify-between gap-[40px] mt-[70px]'>
        <div className='flex-1'>
            <p className='font-semibold pb-[24px]'>a.news</p>
           <News/>
        </div>
        <div className='flex-1'>
            <p className='font-semibold pb-[24px]'>a.creators - new to you</p>
           <Creators/>
        </div>
        <div className='flex-1'>
            <p className='font-semibold pb-[24px]'>Featured</p>
            <Feature/>
        </div>
      </div>
    </section>
  )
}

export default NewsAndUpdates