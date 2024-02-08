import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { notificationLocalStorage, userSignupLocalStorage } from '../../api/localStorage'
// import { notify } from '../../utils/toast/toast'
import { authSer } from '../../api/api'
import { closeModal, setIsOpenedModalLogin } from '../../redux/modalSlice'
import { useDispatch } from 'react-redux'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle';

const Verification = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [code, setCode] = useState('')
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        document.querySelector('html').style.padding = 0
        return () => {
            document.querySelector('html').style.padding = '0 52px'
        }
    },[])

    const handleChange = (e) => {
        setCode(e.target.value)
        if(e.target.value) {
            setErr('')
        } else {
            setErr('This field should not be blank.') 
        }
    }

    const verify =  () => {
        if(!code) {
            setErr('This field should not be blank.')
            return null
        }

        const userSignup = userSignupLocalStorage.get()

        const data = {
            email: userSignup.email,
            code_key: code.toString()
        }
        setLoading(true)

        //confirm code
        authSer.checkVerificationCode(data)
        .then((res) => {
            //xu ly create new account here
            authSer.register(userSignup)
            .then(({data}) => {
                    //xoa
                userSignupLocalStorage.remove()
                authSer.updateVerificationCode({code_id: res.data.content.code_id})
                setLoading(false)
                // show pop up
                notificationLocalStorage.set(data.message)
                // redirect
                navigate('/')
                dispatch(setIsOpenedModalLogin())
            })
            .catch(error => {
                setLoading(false)
                setErr(error.response.data.message)
            })
            
        })
        .catch(error => {
            setLoading(false)

            setErr(error.response.data.message)
        })
        
    }

  return (
    <section className='min-h-[100vh] w-[100vw] flex  justify-between'>
        <div className='flex-1 w-full min-h-[100vh] bg-gray flex items-center justify-center'>
            <div className='flex items-center justify-center font-semibold'>
                <img src="/public/img/a..svg" alt="" />
                <div className='ml-[20px] w-[162px] h-[162px] rounded-full bg-sub_menu_green text-[100px] flex items-center justify-center'>
                    <p>👋</p>
                </div>
            </div>
        </div>
        <div className='flex-1 w-full flex items-center justify-center '>
            <div className='max-w-[580px] w-full min-h-[100vh] px-[40px] flex flex-col justify-between'>
                <div className='py-[55px]'>
                    <p className='text-[22px] font-light'>Welcome to the community!</p>
                </div>

                <div>
                        <p className='text-[24px] font-semibold mb-[24px]'>Verify your account</p>
                        <p className='mb-[16px] font-light'>We has send verification code to your email. Please enter the code to verify your account.</p>

                        <div className='mb-[30px]'>
                            <div>
                                <label htmlFor="" className='label-text '>VERIFICATION CODE (*)</label>
                            </div>
                            <div className='flex h-[48px] bg-white pl-[16px] items-baseline border-b-[1px] border-gray'>
                                <div className='text-sub_menu_index font-[300] text-nowrap '>adam - </div>
                                <input type="text"  className='input-default pl-[8px]' value={code} onChange={handleChange} placeholder='Verification code'/>
                            </div>
                            {err && <div className='pt-[10px]'>
                                <p className=' text-error text-[12px] font-light'>{err}</p>
                            </div>}
                        </div>

                        <div className='relative mb-[30px]'>
                            <button className='w-full h-[72px] bg-black text-white rounded-[8px] text-[20px] font-light hover:bg-black_hover transition-all ease-in-out duration-300 cursor-pointer'
                                onClick={verify}
                            >
                                {loading ? <LoadingCircle/> : "Verify your account"}
                            </button>
                        </div>

                        
                        
                </div>

                <div className='flex justify-center py-[55px]'>
                    <p className='font-light flex'><span className='link-text font-semibold leading-7 block'
                        onClick={() => navigate('/')}
                    >Back to homepage</span></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Verification