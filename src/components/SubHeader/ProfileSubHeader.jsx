import {useState, useEffect} from 'react';
import MainMenu from './MainMenu'
import { useNavigate } from 'react-router-dom'
import {userSer} from '../../api/api.js';
import {chaneVIEtolinktext} from '../../utils/others/changeVIEtoENG.js';
import Avatar from '../Avatar/Avatar';

const ProfileSubHeader = () => {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState(false)
  
  const [user, setUser] = useState(null)
  useEffect(() => {
      // get user information
      userSer.getProfile()
      .then(({data}) => {
          setUser(data.content)
      })
      .catch(error => {
          console.log(error)
          'abc'.toLowerCase
      })
  },[])

  return (
    <section className={`fixed z-[1] left-[50%] bottom-[30px] -translate-x-[50%]  p-[6px] bg-bg_sub_header rounded-[14px] text-[14px] flex w-fit font-light show-on-begin ${isShow ? 'h-[393px] min-w-[720px]' : 'h-[72px] min-w-0'} transition-default`}>
        <div>
          {isShow && <MainMenu/>}
          <div className='h-[60px] bg-black text-white px-[20px] flex items-center rounded-[8px] cursor-pointer'
              onClick={() => setIsShow(!isShow)}
          >
              <p className=' cursor-pointer'>a.</p>
              <p className=' cursor-pointer text-sub_menu_green font-semibold ml-1'>directory.</p>
              <p className='mr-3 text-sub_menu_index ml-1'>profile</p>
              <i className=" cursor-pointer fa fa-bars"></i>
          </div>
        </div>
        {!isShow && <div className='ml-[6px] bg-[#3e3e3e] text-white rounded-[8px] h-[60px] flex items-center px-[6px]'>
            <div className='flex items-center ml-[6px] mr-[12px] gap-[10px] '>
              <Avatar size={32} />
              <p className='link-text leading-[200%] before:bg-white '>{user?.full_name}</p>
            </div>
        </div>}
        {!isShow && <div className='ml-[6px] bg-sub_menu_green text-black rounded-[8px] h-[60px] flex items-center px-[6px] cursor-pointer'>
            <p className='flex items-center px-[20px] font-semibold ' onClick={() => navigate('/settings')}>Settings</p>
        </div>}
    </section>
  )
}

export default ProfileSubHeader