import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

const SettingLayout = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    let breakcum = ''

    useEffect( () => {
        document.querySelector(".selected-tab").classList.remove('.selected-tab')
    }, [pathname])


    const showBreakcum = () => {
        if(pathname.replaceAll('/','')==="settings" ) {
            breakcum = 'Profile'
        }
        if(pathname.replaceAll('/','')==="settingsemail_password" || pathname.replaceAll('/','')==="settingsdelete-account") {
            breakcum= "Personal Info"
        }
        return breakcum
    }


  return (
    <section className='mt-[50px] mb-[100px]'>
        <div className='flex items-center h-[125px]'>
            <div className='w-[20%] h-[65px]'>
                <h6 className='text-[20px] font-semibold'>Profile & Directory</h6>
                <div className='flex items-center my-[10px]'>
                    <i className="fa fa-sliders-h"></i>
                    <p className='mx-[8px]'> &gt;</p>
                    <p className={`${pathname.replaceAll('/','')==="settingsdelete-account" ? 'font-light' : 'font-semibold'}`}>
                        {showBreakcum()}
                        {pathname.replaceAll('/','')==="settingsdelete-account" &&
                            <span className=' font-semibold'> <span className=' font-light'>&gt;</span> Delete account</span>
                            
                        }
                    </p>
                </div>
            </div>
            <div className='w-[80%] pl-[30px] h-[60px] relative'>
                <div className=' flex justify-start gap-[40px] h-full font-light'>
                   
                    <p className={`tab cursor-pointer ${pathname.replaceAll('/','')==="settings" && 'selected-tab'}`} onClick={() => navigate("/settings")}>Public Profile</p>
                    <p className={`tab cursor-pointer ${pathname==="" && 'selected-tab'}`} >Directory</p>
                    <p className={`tab cursor-pointer ${pathname==="" && 'selected-tab'}`} >Gallery</p>
                    <p className={`tab cursor-pointer ${pathname.replaceAll('/','')==="settingsemail_password"  && 'selected-tab'|| pathname.replaceAll('/','')==="settingsdelete-account" && 'selected-tab'}`} onClick={() => navigate("/settings/email_password")}>Personal Info</p>
                </div> 
                <div className=' absolute bottom-0 left-0 w-full pl-[30px]'>
                    <div className='footer-dot w-full h-[1px]'></div>
                </div>
            </div>
        </div>
        <Outlet/>
    </section>
  )
}

export default SettingLayout