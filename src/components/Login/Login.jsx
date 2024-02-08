import React, { useEffect, useState } from 'react'
import Close from '../Close/Close'
import BlackBackground from '../BlackBackground/BlackBackground'
import { authSer } from '../../api/api'
import { validation } from '../../utils/validation/validation'
import { setIsLogin } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'
import { closeModal, setIsOpenedModalSignup } from '../../redux/modalSlice'
import { notificationLocalStorage } from '../../api/localStorage'
import OtherMethod from './OtherMethod'
import BtnLogin from './BtnLogin'

const Login = () => {
    const dispatch = useDispatch()
    let [checked, setChecked] = useState(true)
    let [userLogin, setUserLogin] =useState ({
        email: '',
        pass_word: ''
    })

    let [err, setErr] = useState({
        email:'',
        pass_word: ''
    })

    const [errAPI, setErrAPI] = useState('')

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        document.querySelector('body').classList.add('no-scroll')
        return () => {
            document.querySelector('body').classList.remove('no-scroll')
        }
    },[])

    const handleChange = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})


        // VALIDATION
            //password + email 
        if(e.target.value.trim() === '') {
            setErr({...err, [e.target.name]: 'This field must not be empty.'})
            return 

        } else {
            setErr({...err, [e.target.name]: ''})
        }
            //email
        if(e.target.name === 'email') {
            const passed = validation.email(e.target.value)
            if(!passed) {
                setErr({...err, [e.target.name]: 'Incorrect email format.'})

            } else {
                setErr({...err, [e.target.name]: ''})
            }
        }
    }


    const login = (e) => {
        e.preventDefault()
        
        //check lan dAU TIEN KHI CHUA NHAP DU LIEU
        if(!userLogin.email && !userLogin.pass_word) {
            setErr({email: 'This field must not be empty.', pass_word: 'This field must not be empty.'})
            return null
        }

        if(err.email || err.pass_word) {
            return null
        }

        setLoading(true)

        authSer.login(userLogin)
        .then(({data}) => {
            notificationLocalStorage.set(data.message)
            setTimeout(() => {
                setLoading(false)
                dispatch(closeModal())
                dispatch(setIsLogin(data.content))
                window.location.reload()
            }, 1000);
        })
        .catch(error => {
            setLoading(false)
            setErrAPI(error.response.data.message)
        })
    }
  return (
    <section className='fixed top-0 left-0 z-10 w-[100vw] min-h-[100vh] overflow-scroll flex items-center justify-center'>
        <BlackBackground/>
        <div className=' w-[80%] absolute top-[30px] py-[30px]' >
           <div className='bg-white text-black rounded-[16px] overflow-hidden '>
           <div className='w-full h-full flex items-stretch justify-between'>
                <div className='flex-1 p-[50px] bg-dark_gray flex flex-col justify-between' >
                    <p className='text-[24px] mb-[36px] font-light'>Welcome!</p>
                    <div className='flex items-center justify-center font-semibold'>
                        <img src="/public/img/a..svg" alt="" />
                        <div className='ml-[20px] w-[162px] h-[162px] rounded-full bg-[#222222] text-[100px] flex items-center justify-center'>
                            <p>👋</p>
                        </div>
                    </div>
                    <p className='font-light flex'>Not a member yet? &nbsp; <span className='link-text font-semibold leading-7 block' onClick={()=> dispatch(setIsOpenedModalSignup())}>Register now</span></p>

                </div>
                <div className='flex-1 p-[50px]'>
                    <p className='text-[24px] mb-[36px] font-semibold'>Log in</p>
                    {errAPI && 
                    <div className='pt-[10px] mb-[30px]'>
                        <p className=' text-error text-[12px] font-light'>{errAPI}</p>
                    </div>}

                    <form action="">
                        <div className='mb-[30px]'>
                            <label className='block font-thin uppercase text-[12px] text-[#a7a7a7] mb-[8px]' htmlFor="email">Email</label>
                            <input className='h-[48px] px-[16px] text-black font-light outline-none border-b-[1px] border-gray w-full' 
                                    name='email' 
                                    id="email" 
                                    placeholder='Email' 
                                    type="email" 
                                    value={userLogin.email}
                                    onChange={handleChange}
                            />
                            {err.email && 
                            <div className='pt-[10px]'>
                                <p className=' text-error text-[12px] font-light'>{err.email}</p>
                            </div>}
                        </div>
                        <div className='mb-[30px]'>
                            <label className='block font-thin uppercase text-[12px] text-[#a7a7a7] mb-[8px]' htmlFor="pass_word">Password</label>
                            <input className='h-[48px] px-[16px] text-black font-light outline-none border-b-[1px] border-gray w-full ' 
                                    name='pass_word' 
                                    id="pass_word" 
                                    placeholder='Password' 
                                    type="password" 
                                    required
                                    value={userLogin.pass_word}
                                    onChange={handleChange} 
                            />
                            {err.pass_word && 
                            <div className='pt-[10px]'>
                                <p className=' text-error text-[12px] font-light'>{err.pass_word}</p>
                            </div>}
                        </div>
                        <div className='pl-[25px] relative flex items-center mb-[30px] w-fit cursor-pointer'
                            onClick={()=>{setChecked(!checked)}}                        
                        >
                            <div className='absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 '
                            
                            >
                                {checked && <div className='absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '></div>}
                            </div>
                            <p className=' font-light'>Keep me logged in</p>
                        </div>

                       <BtnLogin login={login} loading={loading}/>
                        <div className='flex justify-end'>
                            <p className='link-text text-[12px] leading-6'>Forgot your password?</p>
                        </div>
                    </form>
                    <OtherMethod/>
                </div>
            </div>
           </div>
        </div>
        <Close />
    </section>
  )
}

export default Login