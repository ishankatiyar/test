import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import authService from "./appwrite/auth"
import {login , logout} from "./store/authSlice"
import {useDispatch} from 'react-redux'
import { Header ,Footer} from './components'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=> {
    authService.getCurrentUser()
    .then((userData)=>{
      if ( userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])


  

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400' >
      <div className='w-full black'>
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null;
}
export default App
