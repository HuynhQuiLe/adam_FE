import React from 'react'
import { authSer } from '../../api/api'
// import { notify } from '../../utils/toast/toast'
import { setIsLogin } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react';
import {userSer} from '../../api/api.js';
import {chaneVIEtolinktext} from '../../utils/others/changeVIEtoENG.js';
import Avatar from '../Avatar/Avatar'
import { notify } from '../../utils/notify/notify'
import { notificationLocalStorage } from '../../api/localStorage'

const User = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [user, setUser] = useState(null)
    useEffect(() => {

        

        userSer.getProfile()
        .then(({data}) => {
            setUser(data.content)
        })
        .catch(error => {
            console.log(error)
            'abc'.toLowerCase
        })


        // show notification

        notificationLocalStorage.get() && notify.success(notificationLocalStorage.get())
    },[])

    const logout = () => {
        authSer.logout()
        .then(({data}) => {
            notificationLocalStorage.set(data.message)
            dispatch(setIsLogin(data.content))
            window.location.href='/'
        })
        .catch(error => {
            notify.error(error.response.data.message)
        })
    }


  return (
    <div className='group relative'>
        <Avatar size={32} />
        <div className=' absolute top-[100%] z-[2] pt-[12px] bg-transparent transition-default opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
            <div className=' bg-black text-white py-[20px] w-[230px] rounded-[8px] '>
                <div className='pb-[16px] text-[14px] font-thin border-b-[1px] border-dropdown_user_list'>
                    <p className='h-[32px] px-[28px] leading-[32px] hover:bg-dropdown_user_list cursor-pointer transition-default'>Upgrade to Pro</p>
                </div>
                <div className='py-[16px] text-[14px] font-thin border-b-[1px] border-dropdown_user_list'>
                    <p  className='h-[32px] px-[28px] leading-[32px] hover:bg-dropdown_user_list cursor-pointer transition-default' onClick={() => navigate(`/profile/${user?.url ? user.url : chaneVIEtolinktext(user?.full_name)}`)}>Profile</p>
                    <p  className='h-[32px] px-[28px] leading-[32px] hover:bg-dropdown_user_list cursor-pointer transition-default'>Collections</p>
                    <p  className='h-[32px] px-[28px] leading-[32px] hover:bg-dropdown_user_list cursor-pointer transition-default'>Notifications</p>
                </div>
                <div className='text-[14px] font-semibold border-b-[1px] border-dropdown_user_list py-[10px]'>
                    <p className='h-[32px] px-[28px] leading-[32px] hover:bg-dropdown_user_list cursor-pointer transition-default'>Dashboard</p>
                </div>
                <div className='pt-[16px] text-[14px] font-thin'>
                    <p  className='h-[32px] px-[28px] leading-[32px] hover:bg-dropdown_user_list cursor-pointer transition-default'
                        onClick={logout}
                    >Logout</p>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default User