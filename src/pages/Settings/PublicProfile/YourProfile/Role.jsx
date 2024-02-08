import React from 'react'
import {useState} from 'react';

const Role = ({roles, role_id, changeUserInfo }) => {
    const [showRole, setShowRole] = useState(false)

    const renderRole = () => {
        return roles?.map((role, index) => {
            return <p className={`px-[15px] py-[6px] ${role.role_id === role_id ? 'bg-light_gray_2' : 'bg-white'} hover:bg-light_gray_2 transition-default cursor-pointer`} 
                        key={index} 
                        role_id={role.role_id}
                        onClick={(e) => changeUserInfo('role_id',Number(e.target.getAttribute('role_id')))}
                    >{role.role}</p>
        })
    }


    return (
        <div className='flex-1'>
            <div>
                <label htmlFor="" className='label-text '>WHO ARE YOU? (*)</label>
            </div>
            <div>
                <div className='w-full bg-white h-[48px] flex items-center input-default relative cursor-pointer' onClick={()=>setShowRole(!showRole)}>
                    <p>{roles && roles.find(role => role.role_id === role_id).role}</p>
                    <div className=' absolute right-[16px]'>
                        {showRole ? <i className="fa fa-chevron-up text-sub_menu_index"></i> : <i className="fa fa-chevron-down text-sub_menu_index"></i>}    
                    </div>
                    {
                        showRole && <div className=' absolute z-10 w-full top-[48px] left-0 bg-white border-t-0 border-[1px] border-gray'>
                        {roles && renderRole()}
                    </div>
                    }
                </div>
                {/* <select className='input-default'>
                    <option value="">ADMIN</option>
                    <option value="">Manager</option>
                    <option value="">User</option>
                </select> */}
                {/* <input type="text"  className='input-default' placeholder='Company or freelancer name'/> */}
            </div>
            
        </div>
    )
}

export default Role