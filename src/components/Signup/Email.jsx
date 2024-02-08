import React from 'react'
import {useState} from 'react';

const Email = ({handleChange, errEmail}) => {
    const [isFocus, setIsFocus] = useState(false)

  return (
    <div className='mb-[30px]'>
        <label className='block font-thin uppercase text-[12px] text-[#a7a7a7] mb-[8px]' htmlFor="email">Email (*)</label>
        <input className='h-[48px] px-[16px] text-black font-light outline-none border-b-[1px] border-gray w-full ' 
                name='email' 
                id="email" 
                placeholder='Email' 
                type="email" 
                onChange= {handleChange}
                onFocus={() => setIsFocus(true)}
                />

        {!isFocus && <div className='pt-[10px]'>
            <p className=' text-sub_menu_index text-[12px] font-light'>OTP will be send to this email later.</p>
        </div>}
        {errEmail && 
            <div className='pt-[10px]'>
                <p className=' text-error text-[12px] font-light'>{errEmail}</p>
            </div>
        }
    </div>
  )
}

export default Email