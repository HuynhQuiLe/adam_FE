import React, { useEffect, useState } from 'react'
import { creatorSer } from '../../../api/api'
import AvatarCreator from '../../../components/Avatar/AvatarCreator'

const Creators = () => {
    const [creators, setCreators] = useState(null)
    useEffect(() => {
        creatorSer.getCreators()
        .then(({data}) => {
            setCreators(data.content)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const renderTitle = (creator) => {
        let title = null
        const index = creator.roles.role.indexOf('/')
        if(index !== -1) {
            title = creator.roles.role.slice(-index + 2)
            if(creator.country) {
                title += ` - ${creator.country}` 
            }
        } else {
            title = creator.roles.role.slice(0, creator.roles.role.indexOf('-'))
        }
        
        return title
    }

    // {creator.country && creator.roles.role_id === 3  ? `Freelance - ${creator.country}`  : creator.roles.role}
    const renderCreators = () => {
        return creators?.map((creator, index) => {
            return (
                <div className='py-[24px] px-[15px] flex  items-center border-t-[1px] border-gray' key={index}>
                    <div className='w-[95px] h-[58px]'>
                        <AvatarCreator size={58} link={creator.avatar} direct={`/profile/${creator.user_id}`} />
                    </div>
                    <div className='w-[-webkit-fill-available]'>
                    <div className=' flex justify-between items-center '>
                        <p className='light-text'>{renderTitle(creator)}</p>
                        {index <=1 && <p className='text-[12px] uppercase text-white bg-black px-[4px] rounded-[4px] w-fit h-fit'>FRESH</p>}
                    </div>
                        <a href={`/profile/${creator.user_id}`} className='font-semibold text-[19px]'>{creator.full_name}</a>
                    </div>
                    
                </div>
            )
        })
    }

  return (
    <div>{renderCreators()}</div>
  )
}

export default Creators