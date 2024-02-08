import React from 'react'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { setItem } from '../../redux/itemSlice';

const Description = () => {
    const [removeIcon, setRemoveIcon] = useState(false)
    const dispatch = useDispatch()
    const [description, setDescription] = useState("Short description about the design.")
  return (
    <div className='flex justify-center items-start'>
        <textarea  className='text-center sub-heading w-[360px] min-h-[150px] bg-transparent outline-none  resize-none text-wrap' value={description}
            placeholder='Description' spellCheck={false}
            onFocus={() =>{
                if(description === 'Short description about the design.')  {
                    setDescription('')
                    setRemoveIcon(true)
                }
            } }
            onChange={(e) =>{
                setDescription(e.target.value)
                dispatch(setItem({description: e.target.value}))
            }}

        ></textarea>
        {!removeIcon && <i className="fa fa-pencil-alt ml-3 text-back_gray pt-2"></i>}
    </div>
  )
}

export default Description