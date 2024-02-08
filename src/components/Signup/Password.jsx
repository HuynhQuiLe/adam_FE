import React from 'react'

const Password = ({handleChange,handleChangeRe_pass_word, errPassword, errRePassword}) => {
  return (
    <div className='flex justify-between gap-[20px]'>
        <div className=' flex-1 mb-[30px]'>
            <label className='block font-thin uppercase text-[12px] text-[#a7a7a7] mb-[8px]' htmlFor="pass_word">Password (*)</label>
            <input className='h-[48px] px-[16px] text-black font-light outline-none border-b-[1px] border-gray w-full ' 
                name='pass_word' 
                id="pass_word" 
                placeholder='Password' 
                type="password" 
                onChange= {handleChange}
                />
        {errPassword && 
            <div className='pt-[10px]'>
                <p className=' text-error text-[12px] font-light'>{errPassword}</p>
            </div>
        }
        </div>
        <div className='flex-1 mb-[30px]'>
            <label className='block font-thin uppercase text-[12px] text-[#a7a7a7] mb-[8px]' htmlFor="re_pass_word">Repeat Password (*)</label>
            <input className='h-[48px] px-[16px] text-black font-light outline-none border-b-[1px] border-gray w-full ' 
                name='re_pass_word' 
                id="re_pass_word" 
                placeholder='Repeat Password' 
                type="password" 
                onChange= {handleChangeRe_pass_word}
                />
            {errRePassword && 
                <div className='pt-[10px]'>
                    <p className=' text-error text-[12px] font-light'>{errRePassword}</p>
                </div>
            }
        </div>
    </div>
  )
}

export default Password