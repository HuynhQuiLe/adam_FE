import React from 'react'
import { useDispatch } from 'react-redux'
import LoadingCircle from '../../../../components/LoadingCircle/LoadingCircle';
import {useState} from 'react';
import { userSer } from '../../../../api/api';
import { notificationLocalStorage } from '../../../../api/localStorage';

const SaveChangeBtn = ({user}) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const save = () => {
    setLoading(true)
    userSer.updatePublicProfile(user)
    .then(({data}) => {
      notificationLocalStorage.set(data.message)
      setTimeout(() => {
        setLoading(false)
        window.location.reload()  
      }, 1000);

    })
    .catch(error => {
      setLoading(false)
      console.log(error)
    })
  }
  return (
    <div className='w-[20%] sticky-blog'>
        <button className='text-[20px] relative font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px]' onClick={save}>
          
          {loading ? <LoadingCircle/> : "Save Changes"}
        </button>
        <p className='mt-[8px] mb-[16px] font-light text-[15px]'>If you have made any edits, remember to save before you leave this page.</p>
    </div>
  )
}

export default SaveChangeBtn