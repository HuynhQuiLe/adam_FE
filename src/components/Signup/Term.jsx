import React from 'react'

const Term = ({errTerm, setErrTerm, checked, setChecked, checkedTerm, setCheckedTerm}) => {

  return (
    <>
        <div className='mb-[16px]'>
            <p className='font-light leading-[200%]'>Awwwards may keep me informed with personalized emails about products and services. See our <b className='font-bold'>Privacy Policy</b> for more details.</p>
        </div>
        <div className='pl-[25px] relative flex items-center mb-[20px] w-fit cursor-pointer'
            onClick={()=>{
                setChecked(!checked)
                if(!checked &&checkedTerm ) {
                    setErrTerm('')
                }
        
            }}                        
        >
            <div className='absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 '
            
            >
                {checked && <div className='absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '></div>}
            </div>
            <p className=' font-light'>Please contact me via e-mail</p>
        </div>

        <div className='pl-[25px] relative flex items-center  w-fit cursor-pointer'
            onClick={()=>{
                setCheckedTerm(!checkedTerm)
                if(checked && !checkedTerm) {
                    setErrTerm('')
                }
            }}                        
        >
            <div className='absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 '
            
            >
                {checkedTerm && <div className='absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '></div>}
            </div>
            <p className=' font-light'>I have read and accept the Terms and Conditions</p>
        </div>

        {errTerm && 
        <div className='pt-[10px] mb-[20px]'>
            <p className=' text-error text-[12px] font-light'>{errTerm}</p>
        </div>}

        <div className='my-[24px]'>
            <small className='font-light'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</small>
        </div>
    </>
  )
}

export default Term