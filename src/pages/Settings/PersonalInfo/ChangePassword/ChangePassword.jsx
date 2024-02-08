import React, { useState } from 'react'
import SaveBtn from './SaveBtn'

const ChangePassword = () => {
    const [pass_word, setPass_word] = useState('')
    const [rePass_word, setRePass_word] = useState('')
    const [errPass_word, seterrPass_word] = useState('')
    const [errRePass_word, setErrRePass_word] = useState('')

    const handleChangePassword = (e) => {
        setPass_word(e.target.value)
        if(!e.target.value.trim()) {
            seterrPass_word('This field must no be empty.')
        } else {
            seterrPass_word('')
        }

        if(e.target.value.trim().length < 6) {
            seterrPass_word('At least 6 characters is required.')
        } else {
            seterrPass_word('')
        }
    }

    const handleReChangePassword = (e) => {
        setRePass_word(e.target.value)
        if(e.target.value !== pass_word) {
            setErrRePass_word('Incorrect repeat password.')
        } else {
            setErrRePass_word('')
        }
    }

  return (
    <div className='flex mt-[10px]'>
        <div className='w-[20%]'>
            <h6 className='text-[20px] font-semibold'>Change password</h6>
        </div>
        <div className='w-[60%] px-[30px] '>
            <div className='flex gap-[20px]'>
                <div className='flex-1'>
                    <div>
                        <label htmlFor="" className='label-text '>NEW PASSWORD (*)</label>
                    </div>
                    <div>
                        <input type="password" value={pass_word} onChange={handleChangePassword} className='input-default' placeholder='New Password'/>
                    </div>
                    {errPass_word && 
                        <div className='pt-[10px]'>
                            <p className=' text-error text-[12px] font-light'>{errPass_word}</p>
                        </div>
                    }
                </div>
                <div className='flex-1'>
                    <div>
                        <label htmlFor="" className='label-text '>CONFIRM PASSWORD (*)</label>
                    </div>
                    <div>
                        <input type="password" value={rePass_word} onChange={handleReChangePassword}   className='input-default' placeholder='Confirm new password'/>
                    </div>
                    {errRePass_word && 
                        <div className='pt-[10px]'>
                            <p className=' text-error text-[12px] font-light'>{errRePass_word}</p>
                        </div>
                    }
                </div>
            </div>          
        </div>
       <SaveBtn pass_word={pass_word} setErrRePass_word= {setErrRePass_word} seterrPass_word={seterrPass_word} rePass_word={rePass_word} errPass_word={errPass_word} errRePass_word={errRePass_word}/>
    </div>
  )
}

export default ChangePassword