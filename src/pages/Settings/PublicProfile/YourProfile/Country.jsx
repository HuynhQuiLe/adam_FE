import React, { useEffect, useState } from 'react'
import {countries} from 'country-data'
import { removeVietnameseTones } from '../../../../utils/others/changeVIEtoENG'


const Country = ({country, changeUserInfo}) => {
    const [showCountry, setShowCountry] = useState(false)
    const [countryList, setCountryList] = useState(null)
    const [keySearchCountry, setKeySearchCountry] =useState('')


    useEffect(() => {
        setCountryList(countries.all.filter(coun => removeVietnameseTones(coun.name).toLowerCase().includes(keySearchCountry)))
    },[keySearchCountry])


    const renderCountrySelection = () => {
        return countryList?.map((coun, index) => {
            return (
                <div key={index}>
                    <p className={`px-[15px] py-[6px] ${coun.name.trim() === country.trim() ? 'bg-light_gray_2' : 'bg-white'} hover:bg-light_gray_2 transition-default cursor-pointer`}
                        onClick={(e) => changeUserInfo('country', e.target.innerHTML)}
                    >{coun.name}</p>
                </div>
              )
        })
    }

  return (
    <div className='mt-[36px]'>
        <div>
            <label htmlFor="" className='label-text '>COUNTRY</label>
        </div>
        <div>
        <div className='w-full bg-white h-[48px] flex items-center input-default relative cursor-pointer' 
            onClick={()=> {
                if(showCountry) {
                    setKeySearchCountry('')
                }
                setShowCountry(!showCountry)

                
            }}>
                    <div className=' absolute right-[16px]'>
                        {showCountry ? <i className="fa fa-chevron-up text-sub_menu_index"></i> : <i className="fa fa-chevron-down text-sub_menu_index"></i>}    
                    </div>
                    {showCountry && 
                        <div className=' absolute z-10 w-full top-[48px] left-0 bg-white border-t-0 border-[1px] border-gray'>
                            <div className=''>
                                <input type="text" className='px-[15px] py-[6px] w-full outline-none' autoFocus placeholder='Search your country' onChange={(e) => setKeySearchCountry(removeVietnameseTones(e.target.value).toLowerCase())} />
                            </div>
                            <div className='max-h-[330px] overflow-y-scroll border-t-[1px] border-gray'>
                                {!keySearchCountry &&  <p className={`px-[15px] py-[6px] ${country === 'Choose a country' ? "bg-light_gray_2" : "bg-white"} hover:bg-light_gray_2 transition-default cursor-pointer`} onClick={(e) => changeUserInfo('country', null)}>Choose a country</p>}
                                {countryList && renderCountrySelection()}
                            </div>
                            
                        </div>
                    }
                    <p>{country}</p>
                </div>
        </div>
    </div>
  )
}

export default Country