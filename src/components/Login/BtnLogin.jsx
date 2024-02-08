import React from 'react'
import LoadingCircle from '../LoadingCircle/LoadingCircle';

const BtnLogin = ({loading, login}) => {
    return (
        <div className='relative mt-[10px] mb-[30px]'>
            <button className='w-full h-[72px] bg-black text-white rounded-[8px] text-[20px] font-light hover:bg-black_hover transition-all ease-in-out duration-300 cursor-pointer'
                onClick={login}
            >
                {loading ? <LoadingCircle/> : "Log in now"}
            </button>
        </div>
    )
}

export default BtnLogin