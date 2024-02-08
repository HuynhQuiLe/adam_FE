import React, { useEffect, useState } from 'react'
import { userSer } from '../../api/api'

const Avatar = ({size}) => {
    const [avatar, setAvatar] = useState(null)
    useEffect(() => {
        userSer.getUserAvtar()
        .then(({data}) => {
            console.log(data.content.avatar)
            setAvatar(data.content.avatar)
        })
        .catch(error => {
            console.log(error)
        })
    })


    const Picture = () => {
        return <img src={avatar} alt="avatar" className={`w-[${size}px] h-[${size}px] object-cover rounded-full max-w-fit cursor-pointer grayscale`} 
        
            style={{width: `${size}px`, height:`${size}px`}}
        />
    }

    const Default = () => {
        return <div className={`w-[${size}px] h-[${size}px]  rounded-full bg-black cursor-pointer`}></div>
    }

  return (
    <div>
        {avatar ? <Picture/> : <Default />}
    </div>
  )
}

export default Avatar