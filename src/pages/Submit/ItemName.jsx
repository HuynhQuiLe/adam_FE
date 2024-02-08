import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setItem } from '../../redux/itemSlice'

const ItemName = () => {
    const dispatch = useDispatch()
    const [item_name, setItem_Name] = useState("Your item's name")
    const [removeIcon, setRemoveIcon] = useState(false)

   
  return (
    <div className=' flex w-full justify-center'> 
        <input className=' w-full big-heading bg-[rgba(255,255,255,0.01)] outline-none text-center text-wrap stroke-orange-200' value={item_name}  spellCheck={false} 
        placeholder='Name'
                onFocus={() => {
                    if(item_name === "Your item's name" ) {
                        setItem_Name('')
                        setRemoveIcon(true)
                    }

                }}
                onChange={(e) => {
                    setItem_Name(e.target.value.toUpperCase())
                    dispatch(setItem({item_name: e.target.value.toUpperCase()}))
                }}
            />
        { !removeIcon &&<i className="fa fa-pencil-alt ml-3 text-back_gray pt-[60px]"></i>}
    </div>
  )
}

export default ItemName