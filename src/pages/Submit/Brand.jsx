import React from 'react'
import {useEffect, useState} from 'react';
import {brandSer} from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '../../redux/itemSlice';

const Brand = () => {
const dispatch = useDispatch()

    const [showBrandSelection, setShowBrandSelection] = useState(false)
    const [selectedBrand, setSelectedBrand] = useState('Choose your brand')
    const [brands, setBrands] = useState(null)
    const [keySearchBrand, setKeySearchBrand] =useState('')

    const [removeIcon, setRemoveIcon] = useState(false)



    useEffect(() => {
        brandSer.getAllBrands()
        .then(({data}) => {
            setBrands(data.content.filter(brand =>brand.brand.toLowerCase().includes(keySearchBrand)))
              
        })
        .catch(error => {
            console.log(error)
        })
    },[keySearchBrand])

    const renderBrands = () => {
        return brands?.map((brand, index) => {
            return (
                <div key={index}>
                    {/* <p className={`px-[15px] py-[6px] ${coun.name.trim() === country.trim() ? 'bg-light_gray_2' : 'bg-white'} hover:bg-light_gray_2 transition-default cursor-pointer`} */}
                    <p className={`px-[15px] py-[6px] ${selectedBrand.trim() === brand.brand.trim() ? 'bg-light_gray_2' : 'bg-white'} hover:bg-light_gray_2 transition-default cursor-pointer`}
                        onClick={(e) => {
                            setSelectedBrand(e.target.innerHTML)
                            dispatch(setItem({brand_id: brand.brand_id}))
                        }}
                    >{brand.brand}</p>
                </div>
              )
        })
    }
  return (
    <div className='flex justify-center'>
        <div className='relative flex items-center justify-center mt-[30px] min-w-[200px] w-fit'>
            <p className='text-[18px]'>
                A product
            </p>
            <small className='ml-[5px]'>of</small>
            <div className='w-[32px] h-[32px] mx-[15px]'>
                <img src="/img/small-logo-gray-white.svg" className='w-full h-full' alt="small-logo-gray-white" />
            </div>
            <p className='link-text text-[22px]' onClick={() => {
                setShowBrandSelection(!showBrandSelection)
                setRemoveIcon(true)
            }}>{selectedBrand}</p>
            { !removeIcon &&<i className="fa fa-pencil-alt ml-3 text-back_gray"></i>}
            
            {showBrandSelection&&
                <div className='absolute z-10 w-full top-[48px]  left-0 bg-transparent border-t-0 border-[1px] border-gray'>
                    <div className=''>
                        <input type="text" className='px-[15px] py-[6px] w-full outline-none' autoFocus placeholder='Search your brand' onChange={(e) => setKeySearchBrand(e.target.value.toLowerCase())} />
                    </div>
                    <div className='max-h-[330px] overflow-y-scroll border-t-[1px] border-gray' onClick={() => setShowBrandSelection(!showBrandSelection)}>
                        {!keySearchBrand && <p className={`px-[15px] py-[6px] ${selectedBrand === 'Choose your brand' ? "bg-light_gray_2" : "bg-white"} hover:bg-light_gray_2 transition-default cursor-pointer`} 
                            onClick={(e) => {
                                setSelectedBrand(e.target.innerHTML)
                                dispatch(setItem({brand_id: null}))
                            }}
                        
                        >Choose your brand</p>}
                        {brands && renderBrands()}
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Brand