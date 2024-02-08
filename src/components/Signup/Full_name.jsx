import React from 'react'

const Full_name = ({handleChange, errFullName}) => {
  return (
    <div className='mb-[30px]'>
    <label className='block font-thin uppercase text-[12px] text-[#a7a7a7] mb-[8px]' htmlFor="full_name">Full name (*)</label>
    <input className='h-[48px] px-[16px] text-black font-light outline-none border-b-[1px] border-gray w-full ' 
            name='full_name' id="full_name" 
            placeholder='Full name' 
            type="text" 
            onChange= {handleChange}
            />
    {errFullName && 
        <div className='pt-[10px]'>
            <p className=' text-error text-[12px] font-light'>{errFullName}</p>
        </div>
    }
</div>
  )
}

export default Full_name