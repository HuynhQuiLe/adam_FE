import React, { useState } from 'react'

const URL = ({url, changeUserInfo}) => {
  const [error, setError] = useState('')

  const handleChange = (e) => {
    changeUserInfo('url',e.target.value)

    // validation
    if(!e.target.value.trim()) {
      setError('This value should not be blank.')
    } else {
      setError('')
    }
  }

  return (
    <div className='flex-1'>
        <div>
            <label htmlFor="" className='label-text '>URL (*)</label>
        </div>
        <div className='flex h-[48px] bg-white pl-[16px] items-baseline border-b-[1px] border-gray'>
            <div className='text-sub_menu_index font-[300] '>https://adam.com/</div>
            <input type="text"  className='input-default pl-[8px]' value={url} onChange={handleChange} placeholder='Your Username'/>
        </div>
        {error && <div className='pt-[10px]'>
            <p className=' text-error text-[12px] font-light'>{error}</p>
        </div>}
    </div>
  )
}

export default URL