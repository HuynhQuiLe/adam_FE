import React, { useState } from 'react'
import {userSer} from '../../../../api/api'
import LoadingCircle from '../../../../components/LoadingCircle/LoadingCircle';
import {notificationLocalStorage} from '../../../../api/localStorage';

const SaveBtn = ({pass_word, rePass_word, errPass_word, errRePass_word, seterrPass_word, setErrRePass_word}) => {
    const [loading, setLoading] = useState(false)

    const save = () => {
        if(!pass_word && !rePass_word) {
            setErrRePass_word('This field must no be empty')
            seterrPass_word('This field must no be empty')
            return null
        }

        if(!pass_word ) {
            seterrPass_word('This field must no be empty')
            return null
        }

        if(!rePass_word) {
            setErrRePass_word('This field must no be empty')
            return null
        }

        if(errPass_word || errRePass_word) {
            return null
        }

        setLoading(true)

        userSer.updatePassword({pass_word})
        .then(({data}) => {
            notificationLocalStorage.set(data.message)
            setTimeout(() => {
              setLoading(false)
              window.location.reload()  
            }, 1000);
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })

    }
  return (
    <div className='w-[20%]'>
        <button className='relative text-[20px] font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px]'
            onClick={save}
        >
            {loading ? <LoadingCircle/> : "Update password"}
        </button>
    </div>
  )
}

export default SaveBtn