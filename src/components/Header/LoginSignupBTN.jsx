import React, { useEffect } from 'react'
import {setIsOpenedModalLogin, setIsOpenedModalSignup} from '../../redux/modalSlice';
import { useDispatch } from 'react-redux';
import {notify} from '../../utils/notify/notify';
import {notificationLocalStorage} from '../../api/localStorage';

const LoginSignupBTN = () => {
    const dispatch= useDispatch()

    useEffect(() => {
        // show notification khi log out
        notificationLocalStorage.get() && notify.success(notificationLocalStorage.get())
    })
  return (
    <div className='flex items-center'>
        <p className=' text-nowrap font-semibold text-[14px] cursor-pointer'
            onClick={() => dispatch(setIsOpenedModalLogin())}
        >Log in</p>
        <p className='text-nowrap font-semibold text-[14px] ml-[20px] cursor-pointer'
            onClick={() => dispatch(setIsOpenedModalSignup())}
        >Sign up</p>
    </div>
  )
}

export default LoginSignupBTN