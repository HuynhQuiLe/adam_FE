import React from 'react'
import Header from '../components/Header/Header';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import HomeSubHeader from '../components/SubHeader/HomeSubHeader';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';
import {useState, useEffect} from 'react';
import ShoppingSubHeader from '../components/SubHeader/ShoppingSubHeader';
import ProfileSubHeader from '../components/SubHeader/ProfileSubHeader';
import SettingSubHeader from '../components/SubHeader/SettingSubHeader';
import SubmitSubHeader from '../components/SubHeader/SubmitSubHeader';
import DetailSubHeader from '../components/SubHeader/DetailSubHeader';

const MainLayout = () => {
  const {pathname} = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  // useEffect(() => {
  //     setIsLoading(true)
  //     setTimeout(()=>{
  //         setIsLoading(false)
  //     },4000)
  // },[])


  const renderSubHeader = () => {
    if (pathname.replaceAll('/','') === '') {
      return <HomeSubHeader/>
    }
    if(pathname.replaceAll('/','') === 'shopping') {
      return <ShoppingSubHeader/>
    }

    if(pathname.includes('profile')) {
      return <ProfileSubHeader/>
    }

    if(pathname.includes('settings')) {
      return <SettingSubHeader/>
    }

    if(pathname.replaceAll('/','') === 'submit') {
      return <SubmitSubHeader/>
    }

    if(pathname.includes('details')) {
      return <DetailSubHeader/>
    }

  }
 
  return (
    <section>
      {isLoading && <Loading/>}
      {!isLoading && 
        <>
          <Header/>
          <Outlet/>
          <ScrollToTop/>
          <Footer/>
          {renderSubHeader()}
        </>
      }
        
    </section>
  )
}

export default MainLayout