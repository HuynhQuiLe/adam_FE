import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Shopping from './pages/Shopping/Shopping'
import Details from './pages/Details/Details'
import Profile from './pages/Profile/Profile';
import SettingLayout from './layouts/SettingLayout';
import PublicProfile from './pages/Settings/PublicProfile/PublicProfile';
import PersonalInfo from './pages/Settings/PersonalInfo/PersonalInfo';
import Submit from './pages/Submit/Submit';
import Verification from './pages/Verification/Verification';
import Private from './layouts/Private';
import Success from './components/ShowNotification/Success';
import DeleteAccount from './pages/Settings/DeleteAccount/DeleteAccount'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='shopping' element={<Shopping/>} />
        <Route path='details/:product_name' element={<Details/>} />
        <Route path='profile/:full_name' element={<Private><Profile/></Private>} />
        <Route path='settings' element={<SettingLayout/>}>
            <Route index element={<Private><PublicProfile/></Private>}/>
            <Route path='email_password' element={<Private><PersonalInfo/></Private>}/>
            <Route path='delete-account' element={<Private><DeleteAccount/></Private>}/>
        </Route>
        <Route path='submit' element={<Private><Submit/></Private>} />
      </Route>

      {/* no layout */}
      <Route path='/verification' element={<Verification/>}/>
    </Routes>
    <Success/>
    </>
     
  )
}

export default App
