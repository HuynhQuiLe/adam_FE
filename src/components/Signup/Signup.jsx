import React, { useEffect, useState, } from 'react'
import Close from '../Close/Close'
import BlackBackground from '../BlackBackground/BlackBackground'
import {setIsOpenedModalLogin} from '../../redux/modalSlice.js'
import { useDispatch } from 'react-redux'
import {validation} from '../../utils/validation/validation';
// import { notify } from '../../utils/toast/toast'
import emailjs from '@emailjs/browser'
import { userSignupLocalStorage } from '../../api/localStorage'
import { useNavigate } from 'react-router-dom'
import { authSer } from '../../api/api'
import Full_name from './Full_name'
import Email from './Email'
import Password from './Password'
import Term from './Term'
import CreateBTN from './CreateBTN'
import OtherMethods from './OtherMethods'

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
   
    let [userSignup, setUserSignup] = useState({
        full_name:'',
        email:'',
        pass_word: '',
    })

    const [loading, setLoading] = useState(false)

    const [checked, setChecked] = useState(false)
    const [checkedTerm, setCheckedTerm] = useState(false)


    let [re_pass_word, setRe_pass_word] = useState('')

    const [errFullName, setErrFullName] = useState('')
    const [errEmail, setErrEmail] = useState('')
    const [errPassword, setErrPassword] = useState('')
    const [errRePassword, setErrRePassword] = useState('')
    const [errTerm, setErrTerm] = useState('')
    const [errAPI, setErrAPI] = useState('')

    useEffect(() => {
        document.querySelector('body').classList.add('no-scroll')
        return () => {
            document.querySelector('body').classList.remove('no-scroll')
        }
    },[])

    const handleChange = (e) => {
        setUserSignup({...userSignup,[e.target.name]: e.target.value})

        // VALIDATION
        //password + email _full-name
        if(e.target.name==="email" && e.target.value.trim() === '') {
            setErrEmail('This field must not be empty.')
            return 

        } else {
            setErrEmail('')
        }

        if(e.target.name==="pass_word" && e.target.value.trim() === '') {
            setErrPassword('This field must not be empty.')
            return 

        } else {
            setErrPassword('')
        }


        if(e.target.name==="full_name" && e.target.value.trim() === '') {
            setErrFullName('This field must not be empty.')
            return 

        } else {
            setErrFullName('')
        }

            //email
        if(e.target.name === 'email') {
            const passed = validation.email(e.target.value)
            if(!passed) {
                setErrEmail('Incorrect email format.')

            } else {
                setErrEmail('')
            }
        }

            //pass_word
        if(e.target.name === 'pass_word') {
            if(e.target.value.length < 6) {
                setErrPassword('At least 6 characters is required.')

            } else {
                setErrPassword('')
            }
        }
    }

    const handleChangeRe_pass_word = (e) => {
        setRe_pass_word(e.target.value)

        if(!e.target.value.trim()) {
            setErrRePassword('This field must not be empty.')
            return
        }

        //check
        if(e.target.value !== userSignup.pass_word) {
            setErrRePassword('Incorrect repeat password.')
        } else {
            setErrRePassword('')

        }
    }

    const signup = (e) => {
        e.preventDefault()
        if(!userSignup.email ) {
            setErrEmail('This field must not be empty.')
        }

        if(!userSignup.pass_word ) {
            setErrPassword('This field must not be empty.')
        }

        if(!userSignup.full_name ) {
            setErrFullName('This field must not be empty.')
        }

        if(!re_pass_word ) {
            setErrRePassword('This field must not be empty.')
        }


        if(!checked || !checkedTerm) {
            setErrTerm('These fields must be selected.')
        }

        if(!userSignup.email || !userSignup.full_name || !userSignup.pass_word || !re_pass_word || !checked || !checkedTerm) {
            return null
        }

        // check error
        if(errEmail || errPassword ||errRePassword|| errFullName|| errTerm) {
            return null
        }

        setLoading(true)

        //check duplication
        authSer.registerCheckDuplication({email:userSignup.email})
        .then(({res}) => {
            // accepted all => tam luu data lai
            userSignupLocalStorage.set(userSignup)

            // accepted all => send email + luu vao datdabase
            const code = new Date().getTime().toString().slice(-6)
            const params = {
                to_name: userSignup.full_name,
                to_email: userSignup.email,
                message: code,
                from_name: "Adam Headquarter"
            }

            authSer.createVerificationCode({email:userSignup.email, code_key: code.toString()})
            // gui verification code
            emailjs.send('signup', 'template_lxj06jp', params , 'O2AkEIdS9pwK4YQFL')
            .then((result) => {
                setLoading(false)
                navigate('/verification')
            }, (error) => {
                setLoading(false)
                console.log(error.text);
            });

            
        })
        .catch(error => {
            setLoading(false)
            setErrAPI(error.response.data.message)
        })
    }

    
  return (
    <section className='fixed top-0 left-0 z-10 w-[100vw] min-h-[100vh] overflow-scroll flex items-center justify-center'>
        <BlackBackground/>
        <div className='w-[80%] absolute top-[30px] pb-[30px] ' >
            
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
                    <p className='font-light flex'>Are you a member?&nbsp; <span className='link-text font-semibold leading-7 block' onClick={() => dispatch( setIsOpenedModalLogin() )}>Log in now</span></p>

                </div>
                <div className='flex-1 p-[50px]'>
                    <p className='text-[24px] mb-[36px] font-semibold'>Sign up with your e-mail</p>
                    {errAPI && 
                    <div className='pt-[10px] mb-[30px]'>
                        <p className=' text-error text-[12px] font-light'>{errAPI}</p>
                    </div>}
                    <form action="">
                        <Full_name handleChange={handleChange} errFullName={errFullName}/>
                        <Email handleChange={handleChange} errEmail={errEmail} />
                        <Password handleChange={handleChange} handleChangeRe_pass_word={handleChangeRe_pass_word} errPassword={errPassword} errRePassword={errRePassword}  /> 
                        <Term errTerm={errTerm} setErrTerm={setErrTerm} checked={checked} setChecked={setChecked} checkedTerm={checkedTerm} setCheckedTerm={setCheckedTerm}/>
                        <CreateBTN signup={signup} loading={loading}/>
                    </form>
                    <OtherMethods/>
                </div>
            </div>
           </div>
        </div>
        <Close/>
    </section>
  )
}

export default Signup