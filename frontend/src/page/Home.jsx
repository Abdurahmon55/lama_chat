import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Message from '../components/message/Message'
import SendMessage from '../components/message/SendMessage'
import Sidebar from '../components/sidebar/Sidebar'

function Home() {
  return (
    <div className='n w-10/12 m-auto bg-slate-200 mt-32'>
      <div className='grid grid-cols-5 grid-rows-3 border items-end'>
        <div className='row-span-3 col-span-2 border border-red-500'><Sidebar/></div>
        <div className='row-span-3 col-span-3 flex flex-col border h-full border-blue-500'>
        <div className='border border-red-500 '>a</div>
        <div className='border border-black h-full flex items-end'>
         <Message/>
        </div>
        <div className='border border-red-500'><SendMessage/></div>
        </div>
      </div>
    </div> 
  )
}

export default Home