import React from 'react'
import {useState, useEffect} from 'react';
import {roleSer, userSer} from '../../../api/api.js';

import YourProfile from './YourProfile/YourProfile.jsx';
import SocialMedia from './SocialMedia/SocialMedia.jsx';
import {chaneVIEtolinktext} from '../../../utils/others/changeVIEtoENG.js';

const PublicProfile = () => {
    const [user, setUser] = useState(null)
    const [roles, setRoles] = useState(null)
    useEffect(() => {
        //get public profile
        userSer.getPublicProfile()
        .then(({data}) => {
            console.log(data.content)
            // check url co hya khong. khong co => url = chaneVIEtolinktext(full_name)
            if(!data.content.url) {
                setUser({...data.content, url:  chaneVIEtolinktext(data.content.full_name)})
            } else {
                setUser(data.content)
            }
            
        })
        .catch(error => {
            console.log(error)
        })

        // get all roles
        roleSer.getAllRoles()
        .then(({data}) => {
            console.log(data)
            setRoles(data.content)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const changeUserInfo = (key, value) => {
        setUser({...user,[key]: value})
    }

  return (
   <div className='relative'>
        <YourProfile user={user}  roles={roles} changeUserInfo={changeUserInfo}/>
        <SocialMedia />   
   </div>
  )
}

export default PublicProfile