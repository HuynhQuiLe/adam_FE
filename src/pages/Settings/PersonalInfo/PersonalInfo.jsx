import React from 'react'
import ChangePassword from './ChangePassword/ChangePassword'
import ChangeEmail from './ChangeEmail/ChangeEmail'
import DeleteAccountSection from './DeleteAccountSection/DeleteAccountSection'

const PersonalInfo = () => {
  return (
    <div className='relative'>
        <ChangePassword />
        <div className='mt-[100px] mb-[50px] h-[1px] w-full bg-line'></div>
       <ChangeEmail />
        <div className='mt-[100px] mb-[50px] h-[1px] w-full bg-line'></div>
       <DeleteAccountSection/>

   </div>
  )
}

export default PersonalInfo