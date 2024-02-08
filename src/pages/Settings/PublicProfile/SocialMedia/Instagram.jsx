import React from 'react'

const Instagram = ({instagram, handleChange}) => {
  return (
    <div className='flex-1'>
        <div>
            <label htmlFor="" className='label-text '>INSTAGRAM</label>
        </div>
        <div className='flex h-[48px] bg-white pl-[16px] items-baseline border-b-[1px] border-gray'>
            <div className='text-sub_menu_index font-[300] '>https://instagram.com/</div>
            <input type="text" value={instagram} name='instagram'  className='input-default pl-[8px]' placeholder='Your link' onChange={handleChange}/>
        </div>
        
    </div>
  )
}

export default Instagram