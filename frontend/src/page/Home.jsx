import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../components/message/Contact'
import Message from '../components/message/Message'
import SendMessage from '../components/message/SendMessage'
import Sidebar from '../components/sidebar/Sidebar'

function Home() {
  return (
    <div className='n sm:w-10/12 shadow-lg m-auto lg:w-8/12 bg-slate-200 mt-32'>
      <div className='grid grid-cols-5 grid-rows-3 border items-end'>
        <div className='row-span-3 col-span-2 '><Sidebar/></div>
        <div className='row-span-3 col-span-3 flex flex-col  h-full '>
        <div ><Contact/></div>
        <div className='h-full flex items-end'>
         <Message/>
        </div>
        <div><SendMessage/></div>
        </div>
      </div>
    </div> 
  )
}

export default Home