import React from 'react'
import { useNavigate } from 'react-router-dom'

const DeleteAccountSection = () => {
  const navigate = useNavigate()
  return (
    <div className='flex mt-[10px] gap-[50px]'>
        <div className='w-[30%]'>
            <h6 className='text-[20px] font-semibold text-error'>Unhappy?</h6>
            <p className='mt-[8px] mb-[16px] font-light text-[15px]'>We’ll be sad to see you leave, but if you want to permanently delete your account and all its data, here’s the place.</p>
        </div>
        <div className='w-[70%]  '>
            <div className='flex items-center p-[40px] rounded-[8px] w-full bg-light_gray_2 font-light'>
                <p>Want to delete your account?</p>
                <i className="fa fa-trash-alt mx-4"></i>
                <p className='link-text' onClick={()=> navigate('/settings/delete-account')}>Delete Account</p>
            </div>    
          <p className='mt-[30px]'><i className=' opacity-35'>The function is under countruction. Please be patient. </i></p>
        </div>

        
    </div>
  )
}

export default DeleteAccountSection