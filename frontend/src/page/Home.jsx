import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Contact from '../components/message/Contact'
import Message from '../components/message/Message'
import SendMessage from '../components/message/SendMessage'
import Modal from '../components/profil/Modal'
import Sidebar from '../components/sidebar/Sidebar'
import { selectToggol } from '../data/authSlice'

function Home() {
  const toggol = useSelector(selectToggol)
  useEffect(()=>{

  },[toggol])
  return (
    <div className='n sm:w-10/12 shadow-lg m-auto lg:w-8/12 bg-slate-200 mt-32'>
      <div className='grid grid-cols-5 grid-rows-3 border items-end'>
        <div className='row-span-3 col-span-2 '><Sidebar/></div>
        {toggol ? <div className='row-span-3 col-span-3 bg-white h-full'><Modal/> </div> :
        <div className='row-span-3 col-span-3 flex flex-col  h-full '>
        <div ><Contact/></div>
        <div className='h-full'>
         <Message/>
        </div>
        <div><SendMessage/></div>
        </div>}
      </div>
    </div> 
  )
}

export default Home