import React, { useState } from 'react'
import DeleteBtn from './DeleteBtn';

const DeleteAccount = () => {
  const [pass_word, setPass_word] = useState('')
  const [err, setErr] = useState('')

  return (
    <div className='flex mt-[10px]'>
        <div className='w-[20%] leading-[180%]'>
            <h6 className='text-[20px] font-semibold'>Delete my account</h6>
            <p className='mt-[8px] mb-[16px] font-light text-[15px]'>
                Deleting your account <strong className=' font-semibold'>will permanently remove all your data</strong> including:
            </p>
            <ul>
                <li className='font-light pl-4'><span className='pr-2'>-</span><span>Your submissions</span></li>
                <li className='font-light pl-4'><span className='pr-2'>-</span><span>Awards & certificates</span></li>
                <li className='font-light pl-4'><span className='pr-2'>-</span><span>Courses</span></li>
            </ul>
            <p className='mt-[8px] mb-[16px] font-light text-[15px]'>If you have any questions, please contact us <span className='link-text inline-block font-light'>here</span>.</p>
        </div>
        <div className='w-[60%] px-[30px] '>
          <div>
            <div>
                <label htmlFor="" className='label-text '>YOUR PASSWORD (*)</label>
            </div>
            <div className='flex h-[48px] bg-white  items-baseline border-b-[1px] border-gray'>
                <input type="password" name='pass_word' value={pass_word} onChange={(e)=> {
                  setPass_word(e.target.value)
                  setErr('')
                }} className='input-default px-[16px]' placeholder='Current password' />
            </div>
            {err && 
              <div className='pt-[10px]'>
                  <p className=' text-error text-[12px] font-light'>{err}</p>
              </div>
            }
          </div>
        </div>
        <DeleteBtn pass_word={pass_word} setErr={setErr} />
    </div>
  )
}

export default DeleteAccount