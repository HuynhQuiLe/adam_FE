// import React, { useState } from 'react'

// const Submit = () => {
//     const [editPrice, setEditPrice] = useState(false)
//   return (
//     <section className='mt-[50px] mb-[100px]'>
//         <div className='mb-[70px]'>
//             <p className='  normal-text mb-[16px]'>Create new items</p>
//             <div className='flex items-end justify-between'>
//                 <h2 className='small-heading'>Submit your item<br/>
//                 and increase your profit.
//                 </h2>
//             </div>
//         </div>

//         <div className='flex gap-[20px]'>
//             <div className='rounded-[16px] bg-black w-[60%] min-h-[100px] p-[40px]'></div>
//             <div className='rounded-[16px]  bg-transparent border-[1px] border-gray w-[40%] min-h-[100px] p-[40px]'>
//                 <div className='text-[24px] font-semibold mb-[30px]'>
//                     <p>Details Information</p>
//                 </div>
//                 <div>
//                     <div className='mb-[36px]'>
//                         <div>
//                             <label htmlFor="" className='label-text '>ITEM'S NAME (*)</label>
//                         </div>
//                         <div className='flex h-[48px]'>
//                             <input type="text"  className='input-default text-[20px] font-semibold' placeholder="Your Item's name"/>
//                         </div>
//                         <div className='pt-[10px]'>
//                             <p className=' text-error text-[12px] font-light'>This value should not be blank.</p>
//                         </div>
//                     </div>

//                     <div className='mb-[36px]'>
//                         <div>
//                             <label htmlFor="" className='label-text '>PRICE (*)</label>
//                         </div>
//                         <div className='flex'>
//                             {editPrice 
//                             ? <input type="number"  className='input-default font-semibold text-[25px]  max-w-[150px]' placeholder='Price' onMouseLeave={() => setEditPrice(false)}/> 
//                             : <div className='h-[48px]'><p className='font-semibold text-[25px] cursor-pointer' onMouseEnter={() => setEditPrice(true)} >0</p>   </div>
//                             }
                            
//                             <p>$</p>
//                         </div>
                    
//                     </div>

//                     <div className='mb-[36px]'>
//                         <div>
//                             <label htmlFor="" className='label-text '>DESCRIPTION (*)</label>
//                         </div>
//                         <div>
//                             <textarea rows={3}  className='w-full outline-none border-b-[1px] border-gray  focus:border-black transition-default p-[16px]' />
//                         </div>
//                         <div className='pt-[5px]'>
//                             <p className='text-sub_menu_index text-[12px] font-light'>150 characters remaining. No HTML allowed.</p>
//                         </div>
//                     </div>


//                     <div className='flex gap-[20px] mb-[36px]'>
//                         <div className='flex-1'>
//                             <div>
//                                 <label htmlFor="" className='label-text '>BRAND NAME (*)</label>
//                             </div>
//                             <div>
//                                 <input type="text"  className='input-default' placeholder='New Password'/>
//                             </div>
                        
//                         </div>
//                         <div className='flex-1'>
//                             <div>
//                                 <label htmlFor="" className='label-text uppercase'>Stock Receiving (*)</label>
//                             </div>
//                             <div>
//                                 <input type="number"  className='input-default' placeholder='Input Stock Receiving'/>
//                             </div>
//                         </div>
//                     </div>         


//                     <div className='flex gap-[20px] '>
//                         <div className='flex-1'>
//                             <div>
//                                 <label htmlFor="" className='label-text '>GENERAL TYPE (*)</label>
//                             </div>
//                             <div>
//                                 <input type="text"  className='input-default' placeholder='New Password'/>
//                             </div>
                        
//                         </div>
//                         <div className='flex-1'>
//                             <div>
//                                 <label htmlFor="" className='label-text '>SPECIFIC TYPE (*)</label>
//                             </div>
//                             <div>
//                                 <input type="text"  className='input-default' placeholder='Confirm new password'/>
//                             </div>
//                         </div>
//                     </div>         
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Submit


import React, { useEffect, useState } from 'react'
import IOTDSplineTest from '../../components/Spline/IOTDSplineTest';
import { brandSer } from '../../api/api';
import Brand from './Brand';
import ItemName from './ItemName';
import Description from './Description';
import ModelLink from './ModelLink';
import SubmitSpline from '../../components/Spline/SubmitSpline';

const Submit = () => {
    const [item, setItem] = useState({
        brand_id: '',
        item_name:'',
        description: '',
        model:''
    })
    
  return (
    <section className='mt-[50px] mb-[100px]'>
        <div className='mb-[70px]'>
            <p className='  normal-text mb-[16px]'>Create new items</p>
            <div className='flex items-end justify-between'>
                <h2 className='small-heading flex-1'>Submit your item<br/>
                and increase your profit.
                </h2>
                <div>
                    <ModelLink/>
                    {/* <p className='flex-1 normal-text text-right'><strong className=' font-semibold'>Click</strong> to edit the fields below.</p> */}
                </div>
            </div>
        </div>

        <div className='relative min-h-[50vh] w-full '>
            <div className='h-full'>
                <Brand />
                <ItemName />
                <Description />
            </div>

            <div className={`absolute top-0 left-0 w-full min-h-[80vh] z-[-1]`}>
                <SubmitSpline/>
            </div>
       </div>
    </section>
  )
}

export default Submit