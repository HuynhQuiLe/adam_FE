import React, { useState } from 'react'
import LoadingCircle from '../../../components/LoadingCircle/LoadingCircle';
import { authSer, userSer } from '../../../api/api';
import {setIsLogin} from '../../../redux/authSlice';
import {notificationLocalStorage} from '../../../api/localStorage';
import { useDispatch } from 'react-redux';

const DeleteBtn = ({pass_word, setErr}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    

    const deleteAccount = () => {
        console.log(pass_word)
        setLoading(true)
        userSer.deleteAccount({pass_word})
        .then((response) => {
            const messageDelete = response.data.message

            authSer.logout()
            .then(({data}) => {
                setLoading(false)
                notificationLocalStorage.set(messageDelete)
                dispatch(setIsLogin(data.content))
                window.location.href='/'
            })
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            setLoading(false)
            setErr(error.response.data.message)
        })
    }

  return (
    <div className='w-[20%]'>
        <button className=' relative text-[20px] font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px]'
            onClick={deleteAccount}
         >
            {loading ? <LoadingCircle/> :
            <span> 
                <i className="fa fa-trash-alt mx-4"></i>
                Delete account
            </span>}
            
        </button>
        <p className='mb-[16px] font-semibold text-[15px] text-error'>This action is irreversible</p>
    </div>
  )
}

export default DeleteBtn