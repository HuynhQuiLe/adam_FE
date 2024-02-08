import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Shopping = () => {
    const navigate = useNavigate()
    const [readMore, setReadMore] = useState(false)
  return (
    <section className='mt-[50px] mb-[60px]'>
        <div className='my-[20px] h-[40px] flex flex-wrap gap-[15px]'>
            <button className='fillter-button'>Shoses</button>
            <button className='fillter-button'>Adidas</button>
            <button className='fillter-button'>Nike</button>
            <button className='fillter-button'>Camera Accessories</button>
        </div>
        <div className='my-[40px] flex items-start justify-between'>
            <div className='flex-1'>
                <h2 className='small-heading'>Shopping</h2>
            </div>
            <div className='flex-1'>
                <p className='normal-text mb-[16px]'>Find inspiration for your projects in our carefully <strong className=' font-semibold'>curated collections</strong>, featuring 100s of examples of forms, great <strong className=' font-semibold'>UX/UI, footers, transitions and much more</strong> - hand selected by our team every day.</p>
                <div className='pt-[16px]'>
                    <p className='link-text' onClick={()=> setReadMore(!readMore)}>Read more</p>
                </div>
              <p className={`normal-text my-[16px] transition-default overflow-y-hidden ${readMore ? ' max-h-[300px] ' : 'max-h-0 '}  `}>Create your own collections from your user profile to organize your ideas, or click on the collect icon above every element. Personal collections can be private or public, they can be shared with your team, or you can use them to make your <strong className=' font-semibold'>MOODBOARDS</strong>.</p>
            </div>
        </div>
        <div className='shopping-gird'
        >
            <div>
                <div className='w-full h-[490px] bg-black rounded-[16px]'></div>
                <div className='flex mt-[20px] flex-wrap items-center'>
                    <p className='text-[21px] font-semibold' 
                        onClick={()=> navigate('/details')}
                    >
                        Menu Inspiration
                    </p>
                    <div><small className='text-[11px] font-light mx-[15px]'>followed by</small> <strong className=' font-semibold text-[15px]'>+2260</strong> </div>
                </div>
            </div>
            <div>
                <div className='w-full h-[490px] bg-black rounded-[16px]'></div>
                <div className='flex mt-[20px] flex-wrap items-center'>
                    <p className='text-[21px] font-semibold'>Menu Inspiration</p>
                    <div><small className='text-[11px] font-light mx-[15px]'>followed by</small> <strong className=' font-semibold text-[15px]'>+2260</strong> </div>
                </div>
            </div>
            <div>
                <div className='w-full h-[490px] bg-black rounded-[16px]'></div>
                <div className='flex mt-[20px] flex-wrap items-center'>
                    <p className='text-[21px] font-semibold'>Menu Inspiration</p>
                    <div><small className='text-[11px] font-light mx-[15px]'>followed by</small> <strong className=' font-semibold text-[15px]'>+2260</strong> </div>
                </div>
            </div>

            <div>
                <div className='w-full h-[490px] bg-black rounded-[16px]'></div>
                <div className='flex mt-[20px] flex-wrap items-center'>
                    <p className='text-[21px] font-semibold'>Menu Inspiration</p>
                    <div><small className='text-[11px] font-light mx-[15px]'>followed by</small> <strong className=' font-semibold text-[15px]'>+2260</strong> </div>
                </div>
            </div>
            <div>
                <div className='w-full h-[490px] bg-black rounded-[16px]'></div>
                <div className='flex mt-[20px] flex-wrap items-center'>
                    <p className='text-[21px] font-semibold'>Menu Inspiration</p>
                    <div><small className='text-[11px] font-light mx-[15px]'>followed by</small> <strong className=' font-semibold text-[15px]'>+2260</strong> </div>
                </div>
            </div>
            
        </div>
       
    </section>
  )
}

export default Shopping