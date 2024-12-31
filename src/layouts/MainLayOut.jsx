import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../component/Navbar'
const MainLayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer/>
      
    </>
  )
}

export default MainLayOut
