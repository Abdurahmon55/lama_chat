import React from 'react'
import { MdAttachFile } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../data/authSlice';

function SendMessage() {
  const [message, setMessage]=useState()
  const auth = useSelector(selectAuth)

  const handelSubmit=()=>{
    const take_message=localStorage.getItem('id')

    try{
      axios.post(`http://127.0.0.1:8000/api/v1/messages/`, {
        message:message,
        sender:auth,
        take_message:[take_message],
      })
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))

    }
    catch{
      console.log('hato');
    }
  }
  return (
    <form onSubmit={handelSubmit} className='flex items-center justify-between px-2 bg-white'>
        <input onChange={(e)=>setMessage(e.target.value)} className='p-2 w-full bg-transparent ' type="text"  placeholder='Type soomthing...'/>
        <div className='flex text-xl gap-2'>
            <i className='hover:text-blue-500 cursor-pointer'><MdAttachFile/></i>
            <i className='hover:text-blue-500 cursor-pointer'><CiImageOn/></i>
            <button className='hover:text-blue-500 cursor-pointer'><IoIosSend/></button>
        </div>
    </form>
  )
}

export default SendMessage