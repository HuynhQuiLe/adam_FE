import React, {useState } from 'react'
import MainMenu from './MainMenu'

const SubmitSubHeader = () => {
  const [isShow, setIsShow] = useState(false)
  
  return (
    <section className={`fixed z-[1] left-[50%] bottom-[30px] -translate-x-[50%]  p-[6px] bg-bg_sub_header rounded-[14px] text-[14px] flex w-fit font-light show-on-begin ${isShow ? 'h-[393px] min-w-[720px]' : 'h-[72px] min-w-0'} transition-default`}
      onMouseLeave={()=> setIsShow(false)}
    >
        <div>
          {isShow && <MainMenu/>}
          <div className='h-[60px] bg-black text-white px-[20px] flex items-center rounded-[8px] cursor-pointer'
              onClick={() => setIsShow(!isShow)}
          >
              <p className=' cursor-pointer'>a.</p>
              <p className='ml-1 mr-3'>submit</p>
              <i className=" cursor-pointer fa fa-bars"></i>
          </div>
          
        </div>
        {!isShow && <div className='ml-[6px] bg-sub_menu_green text-black rounded-[8px] h-[60px] flex items-center px-[6px]'>
            <p className='flex items-center px-[20px] font-semibold '>SUBMIT</p>
           
        </div>}
    </section>
  )
}

export default SubmitSubHeader