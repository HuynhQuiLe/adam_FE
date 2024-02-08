import React from 'react'

const Birthday = ({birthday, changeUserInfo}) => {
  return (
    <div className='flex-1'>
        <div>
            <label htmlFor="" className='label-text '>BIRTHDAY</label>
        </div>
        <div>
            <input type="date"  className='input-default' value={birthday ? birthday.slice(0,10) : birthday} 
            onChange={(e) => {
              const value = e.target.value ? e.target.value + 'T00:00:00.000Z' : null
              changeUserInfo('birthday', value)
            }} 
            placeholder='dd/MM/yyyy'/>
        </div>
        
    </div>
  )
}

export default Birthday