import React, { useEffect } from 'react'
import {useState} from 'react';
import {remainCharacters} from '../../../../utils/others/remainCharacters';

const Description = ({description, changeUserInfo}) => {
  const NUMBER_REMAIN = 150;
  const [showRemain, setShowRemain] = useState(true)

  useEffect(() => {
    const text = remainCharacters('', NUMBER_REMAIN)
    setShowRemain(text)
  },[])
  return (
    <div className='mt-[36px]'>
        <div>
            <label htmlFor="" className='label-text '>DESCRIPTION</label>
        </div>
        <div>
            <textarea rows={3} value={description} 
            onChange={(e) =>{
              const value  = e.target.value?.trim() ? e.target.value : null
              changeUserInfo('description', value) 

              const text = remainCharacters(e.target.value, NUMBER_REMAIN)
              setShowRemain(text)
            }} 
            className='w-full outline-none border-b-[1px] border-gray  focus:border-black transition-default p-[16px]' />
        </div>
       
        {showRemain && 
            <div className='pt-[10px]'>
                <span className=' text-sub_menu_index text-[12px] font-light'>{showRemain} No HTML allowed.</span>
            </div>}
    </div>
  )
}

export default Description