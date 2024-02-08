import React from 'react'
import {useState} from 'react';
import LoadingCircle from '../../../../components/LoadingCircle/LoadingCircle';
import { socialSer } from '../../../../api/api';
import { notificationLocalStorage } from '../../../../api/localStorage';

const SaveChangeBtn = ({social}) => {
  const [loading, setLoading] = useState(false)

  const save = () => {
    setLoading(true)
    socialSer.updateSocial(social)
    .then(({data}) => {
       notificationLocalStorage.set(data.message)
      setTimeout(() => {
        setLoading(false)
        window.location.reload()  
      }, 1000);
    })
    .catch(error => {
      console.log(error)
    })

  }
  return (
    <div className='w-[20%] sticky-blog'>
        <button className=' relative text-[20px] font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px]'
         onClick={save}>
          {loading ? <LoadingCircle/> : "Save Media Changes"}
        </button>
        <p className='mt-[8px] mb-[16px] font-light text-[15px]'>If you have made any edits, remember to save before you leave this page.</p>
    </div>
  )
}

export default SaveChangeBtn