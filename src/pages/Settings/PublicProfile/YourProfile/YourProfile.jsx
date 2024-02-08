import React from 'react'
import Country from './Country.jsx';
import URL from './URL.jsx';
import DisplayName from './DisplayName.jsx';
import Birthday from './Birthday.jsx';
import Role from './Role.jsx';
import Description from './Description.jsx';
import Avatar from './Avatar.jsx';
import {useState} from 'react';
import SaveChangeBtn from './SaveChangeBtn.jsx';

const YourProfile = ({user, roles, changeUserInfo}) => {

    const [checked, setChecked] = useState(false)

    return (
        <div className='flex mt-[10px] mb-[70px]'>
                <div className='w-[20%]'>
                    <h6 className='text-[20px] font-semibold'>Your profile</h6>
                    <p className='mt-[8px] mb-[16px] font-light text-[15px]'>Add more information about you here.</p>
                </div>
                <div className='w-[60%] px-[30px] '>
                    <div className='flex gap-[20px]'>
                        <URL url ={user?.url} full_name ={user?.full_name} changeUserInfo={changeUserInfo}/>
                        <DisplayName full_name ={user?.full_name} changeUserInfo={changeUserInfo} />
                    </div>


                    <div className='flex gap-[20px] mt-[36px]'>
                        <Birthday birthday = {user?.birthday} changeUserInfo={changeUserInfo}/>
                        <Role roles={roles && roles} role_id = {user?.role_id} changeUserInfo={changeUserInfo} />
                    </div>
                    <Country country={user?.country ? user.country : 'Choose a country'}  changeUserInfo={changeUserInfo} />
                    <Description description={user?.description} changeUserInfo={changeUserInfo} />
                    <Avatar avatar={user?.avatar} changeUserInfo={changeUserInfo}/>

                    <div className='mt-[36px]'>
                        <div>
                            <p className='font-light mb-[16px]'>Awwwards may keep me informed with personalized emails about products and services. See our <strong className='font-semibold cursor-pointer'>Privacy Policy</strong> for more details.</p>
                        </div>
                        
                        <div className='pl-[25px] relative flex items-center mb-[30px] w-fit cursor-pointer'
                            onClick={()=>{setChecked(!checked)}}                        
                        >
                            <div className='absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 '
                            
                            >
                                {checked && <div className='absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '></div>}
                            </div>
                            <p className=' font-light'>Please contact me via e-mail</p>
                        </div>

                    </div>

                </div>
                <SaveChangeBtn user={user} />
            </div>
    )
}

export default YourProfile