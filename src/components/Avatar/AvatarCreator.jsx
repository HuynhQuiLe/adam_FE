import React from 'react'
import { useNavigate } from 'react-router-dom'

const AvatarCreator = ({size, link, direct}) => {
    const navigate = useNavigate()
    const Picture = () => {
        return <img src={link} alt="avatar" className={`w-[${size}px] h-[${size}px] object-cover rounded-full max-w-fit cursor-pointer`} 
            onClick={() => navigate(direct)}
            style={{width: `${size}px`, height:`${size}px`}}
        />
    }

    const Default = () => {
        return <div className={`w-[${size}px] h-[${size}px] rounded-full bg-black cursor-pointer`}
        onClick={() => navigate(direct)}
        ></div>
    }

  return (
    <div>
        {link ? <Picture/> : <Default />}
    </div>
  )
}

export default AvatarCreator