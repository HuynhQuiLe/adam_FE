import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='mb-[40px]'>
            <p className='mb-[30px] text-[36px] font-semibold'>a.</p>
            <div className='flex justify-between'>
                <div className='flex w-[75%] justify-between'>
                    <ul className='flex-1'>
                        <li className='mb-[16px]'><a className='font-semibold' href="/">Websites</a></li>
                        <li className='mb-[16px]'><a className='font-semibold' href="/">Collections</a></li>
                    </ul>
                    <ul className='flex-1'>
                        <li className='mb-[16px]'><a className='font-semibold' href="/">Academy</a></li>
                        <li className='mb-[16px]'><a className='font-semibold' href="/">Jobs</a></li>
                    </ul>
                    <ul className='flex-1'>
                        <li className='mb-[16px]'><a className='font-semibold' href="/">Directory</a></li>
                        <li className='mb-[16px]'><a className='font-semibold' href="/">Conferences</a></li>
                    </ul>
                    <ul className='flex-1'>
                        <li className='mb-[16px]'><a className='font-semibold' href="/">FAQs</a></li>
                        <li className='mb-[16px]'><a className='font-semibold' href="/">About Us</a></li>
                        <li className='mb-[16px]'><a className='font-semibold' href="/">Contact Us</a></li>
                    </ul>
                    <div className='flex-1'></div>
                </div>
                <div className='w-[25%]'>
                    <div className='bg-light_gray_2 w-full py-[32px] flex items-center justify-center rounded-[8px]'>
                        <p className='font-[200]'>Next Conference <i className="fa fa-calendar mx-2"></i>  <span className='link-text inline-block'>Amsterdam</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mb-[120px] pt-[30px] footer-dot '>
            <div className='flex justify-between'>
                <ul className='flex justify-start gap-[20px]'>
                    <li><a className='text-[14px] font-light' href="/">Cookies Policy</a></li>
                    <li><a className='text-[14px] font-light' href="/">Legal Terms</a></li>
                    <li><a className='text-[14px] font-light' href="/">Privacy Policy</a></li>
                </ul>
                <div className='flex justify-end items-end gap-[20px]'>
                    <p className='text-[14px] font-semibold'>Connect:</p>
                    <ul className='flex justify-end gap-[20px]'>
                        <li><a className='text-[14px] font-light' href="/">Instagram</a></li>
                        <li><a className='text-[14px] font-light' href="/">LinkedIn</a></li>
                        <li><a className='text-[14px] font-light' href="/">Twitter</a></li>
                        <li><a className='text-[14px] font-light' href="/">Facebook</a></li>
                        <li><a className='text-[14px] font-light' href="/">YouTube</a></li>
                        <li><a className='text-[14px] font-light' href="/">TikTok</a></li>
                        <li><a className='text-[14px] font-light' href="/">Pinterest</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer