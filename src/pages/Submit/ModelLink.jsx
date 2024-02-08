import React from 'react'
import {useDispatch} from 'react-redux';
import { setItem } from '../../redux/itemSlice';

const ModelLink = () => {
    const dispatch = useDispatch()
    
  return (
    <div className='flex-1'>
        <div>
            <label htmlFor="" className='label-text '>URL OF YOUR design BY Spline</label>
        </div>
        <div className='flex h-[48px] bg-white  items-baseline border-b-[1px] border-gray'>
            {/* <div className='text-sub_menu_index font-[300] '>https://draft.spline.design//scene.splinecode</div> */}
            <input type="text" name='facebook' className='input-default pl-[16px] min-w-[400px]' placeholder='Your link'
                onChange={(e)=> dispatch(setItem({model: e.target.value}))}
            />
        </div>
        
    </div>
  )
}

export default ModelLink