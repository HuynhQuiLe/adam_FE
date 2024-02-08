import React, { useEffect } from 'react'
import {useState} from 'react';
import SaveBtn from './SaveBtn';
import { validation } from '../../../../utils/validation/validation';
import { userSer } from '../../../../api/api';

const ChangeEmail = () => {
    const [currentEmail, setCurrentEmail] = useState('')
    const [email, setEmail] = useState('')
    const [reEmail, setReEmail] = useState('')
    const [errEmail, setErrEmail] = useState('')
    const [errReEmail, setErrReEmail] = useState('')

    useEffect(() => {
        userSer.getUserEmail()
        .then(({data}) => {
            setCurrentEmail(data.content.email)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        

        if(!e.target.value.trim()) {
            setErrEmail('This field must no be empty.')
            return 
        } else {
            setErrEmail('')
        }

        if(!validation.email(e.target.value)) {
            setErrEmail('Incorrect email format.')
        } else {
            setErrEmail('')
        }
        
    }

    const handleChangeReEmail = (e) => {
        setReEmail(e.target.value)
        if(e.target.value !== email) {
            setErrReEmail('Incorrect repeat email.')
        } else {
            setErrReEmail('')
        }
    }



  return (
    <div className='flex mt-[10px]'>
        <div className='w-[20%]'>
            <h6 className='text-[20px] font-semibold'>Change email</h6>
        </div>
        <div className='w-[60%] px-[30px] '>
            <div className='mb-[50px]'>
                <div>
                    <label htmlFor="" className='label-text '>CURRENT E-MAIL</label>
                </div>
                <div className='px-[16px] border-b-[1px] border-gray h-[48px] flex items-center'>
                    <p className=''>{currentEmail}</p>
                </div>
            </div>
            

            <div className='flex gap-[20px]'>
                <div className='flex-1'>
                    <div>
                        <label htmlFor="" className='label-text '>NEW E-MAIL (*)</label>
                    </div>
                    <div>
                        <input type="text" value={email} onChange={handleChangeEmail}  className='input-default' placeholder='New E-mail'/>
                    </div>

                    {errEmail && 
                        <div className='pt-[10px]'>
                            <p className=' text-error text-[12px] font-light'>{errEmail}</p>
                        </div>
                    }
                
                </div>
                <div className='flex-1'>
                    <div>
                        <label htmlFor="" className='label-text '>CONFIRM E-MAIL (*)</label>
                    </div>
                    <div>
                        <input type="text" value={reEmail} onChange={handleChangeReEmail}  className='input-default' placeholder='Confirm new E-mail'/>
                    </div>
                    {errReEmail && 
                        <div className='pt-[10px]'>
                            <p className=' text-error text-[12px] font-light'>{errReEmail}</p>
                        </div>
                    }
                </div>
            </div>          
        </div>
       <SaveBtn email={email} setErrReEmail= {setErrReEmail} setErrEmail={setErrEmail} reEmail={reEmail} errEmail={errEmail} errReEmail={errReEmail}/>
    </div>
  )
}

export default ChangeEmail