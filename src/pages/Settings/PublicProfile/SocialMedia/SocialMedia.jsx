import React, { useEffect, useState } from 'react'
import Facebook from './Facebook'
import Twitter from './Twitter'
import Linkedin from './Linkedin'
import Instagram from './Instagram'
import Tiktok from './Tiktok'
import SaveChangeBtn from './SaveChangeBtn'
import Youtube from './Youtube'
import { socialSer } from '../../../../api/api'

const SocialMedia = () => {
    const [social, setSocial] = useState(null)

    useEffect(() => {
        socialSer.getSocial()
        .then(({data}) => {
            setSocial(data.content)
           
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const handleChange = (e) => {
        setSocial({...social, [e.target.name]: e.target.value})
    }
  return (
    <div className='flex mt-[10px]'>
            <div className='w-[20%]'>
                <h6 className='text-[20px] font-semibold'>Social Media Links</h6>
                <p className='mt-[8px] mb-[16px] font-light text-[15px]'>Improve visibility and help people contact you by adding your social media links here.</p>
            </div>
            <div className='w-[60%] px-[30px] '>
                <div className='flex gap-[20px]'>
                    <Twitter twitter= {social?.twitter} handleChange={handleChange}/>
                    <Facebook facebook= {social?.facebook}  handleChange={handleChange}/>
                </div>

                <div className='flex gap-[20px] mt-[36px]'>
                   <Linkedin linkedin= {social?.linkedin} handleChange={handleChange}/>
                   <Instagram instagram= {social?.instagram} handleChange={handleChange}/>
                </div>

                <div className='flex gap-[20px] mt-[36px]'>
                    <Tiktok tiktok= {social?.tiktok} handleChange={handleChange}/>
                    <Youtube youtube= {social?.youtube} handleChange={handleChange}/>
                </div>
            </div>
            <SaveChangeBtn social={social}/>
        </div>
  )
}

export default SocialMedia