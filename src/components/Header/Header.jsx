import React, { useState } from 'react'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import { useNavigate } from 'react-router-dom'
import User from './User'
import { useDispatch, useSelector } from 'react-redux'
import { setIsOpenedModalLogin, setIsOpenedModalSignup } from '../../redux/modalSlice'
import LoginSignupBTN from './LoginSignupBTN'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLogin} = useSelector(state => state.authSlice)
    const {isOpenedModalLogin, isOpenedModalSignup} = useSelector(state => state.modalSlice)
    // const [isOpenedModalLogin, setIsOpenedModalLogin] = useState(false)
    // const [isOpenedModalSignup, setIsOpenedModalSignup] = useState(false)
    // const closeModal = () => {
    //     isOpenedModalLogin && setIsOpenedModalLogin(false)
    //     isOpenedModalSignup && setIsOpenedModalSignup(false)
    // }
  return (
    <>
        <header className='h-[72px] flex items-center justify-between'>
            <div className=' flex items-center'>
                <p className=' text-[36px] font-semibold cursor-pointer' 
                    onClick={() => navigate('/')}
                >
                    a.
                </p>
            </div>
            <div className='ml-[10px] h-[48px] rounded-[8px] bg-dark_gray flex items-center w-[-webkit-fill-available] justify-between'>
                <div className=' flex items-center w-full'>
                    <div className='text-[25px] text-back_gray pl-[20px] flex items-center'>
                        <i className="fab fa-searchengin"></i>
                    </div>
                    <input type="text" className='h-full bg-inherit pl-[10px] outline-none w-full ' placeholder='Search in inspiration' />
                </div>
                <div className='text-black flex items-center'>
                    <p className='text-[11px] font-light mx-[20px]'>IN</p>
                    <p className='text-[14px] pr-[30px]'>Inspiration</p>
                    <i className="fa fa-chevron-down pr-[20px]"></i>
                </div>
            </div>
            <div className=' flex items-center justify-end ml-[20px]'>
            <div className='mr-[10px]'>
                    {isLogin && <User/>}

                    {!isLogin && <LoginSignupBTN/>}

            </div>

            <div className='ml-[8px] flex items-center'>
                <button className='button bg-black text-white text-nowrap' onClick={() => navigate('/shopping')} >Shop Now</button>
                <button className='button bg-transparent text-black border-[1px] border-black text-nowrap ml-[8px]' onClick={() => navigate('/submit')}>Submit Item</button>
            </div>
            </div>
        </header>
        {isOpenedModalLogin && <Login/>}
        {isOpenedModalSignup && <Signup/>}

    </>
  )
}

export default Header