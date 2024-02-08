import React from 'react'
import {useState} from 'react';
import LoadingCircle from '../../../../components/LoadingCircle/LoadingCircle';
import {userSer} from '../../../../api/api';
import {notificationLocalStorage} from '../../../../api/localStorage';

const SaveBtn = ({email, reEmail, errEmail, errReEmail, setErrEmail, setErrReEmail}) => {
    const [loading, setLoading] = useState(false)

    const save = () => {
        if(!email && !reEmail) {
            setErrReEmail('This field must no be empty')
            setErrEmail('This field must no be empty')
            return null
        }

        if(!email ) {
            setErrEmail('This field must no be empty')
            return null
        }

        if(!reEmail) {
            setErrReEmail('This field must no be empty')
            return null
        }

        if(email !== reEmail) {
            setErrReEmail('Incorrect repeat email.')
            return null
        }

        if(errEmail || errReEmail) {
            return null
        }

        setLoading(true)

        userSer.updateEmail({email})
        .then(({data}) => {
            notificationLocalStorage.set(data.message)
            setTimeout(() => {
              setLoading(false)
              window.location.reload()  
            }, 1000);
        })
        .catch(error => {
            console.log(error)
            setErrEmail(error.response.data.message)
            setLoading(false)
        })

    }
  return (
    <div className='w-[20%]'>
        <button className=' relative text-[20px] font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px]'
            onClick={save}
        > {loading ? <LoadingCircle/> : "Update email"}
        </button>
    </div>
  )
}

export default SaveBtn