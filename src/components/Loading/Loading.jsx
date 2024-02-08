import React, { useState } from 'react'
import {useEffect} from 'react';

const Loading = () => {
    useEffect(() => {
        document.querySelector('body').classList.add('no-scroll')    
        return () => {
            document.querySelector('body').classList.remove('no-scroll')
        }    
    },[])
  return (
    <section>
     <div className=' fixed top-0 left-0 w-[100vw] h-[100vh] bg-gray '>
            <svg viewBox='0 0 400 160'>
                <text x="50%" y="50%" dy=".32em" textAnchor='middle' className='text-[3rem] stroke-[1] loading-text font-bold'
                    >
                    adam.
                </text>
            </svg>
        </div> 
    </section>
  )
}

export default Loading