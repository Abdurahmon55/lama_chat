import React from 'react'
import { MdAttachFile } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../data/authSlice';
import { useEffect } from 'react';

function SendMessage() {
  const [messages, setMessage]=useState()
  const auth = useSelector(selectAuth)
  const [image, setImage] = useState()

  const handelSubmit=async()=>{
    const take_message=localStorage.getItem('id')
     if(messages){
      const response=await axios.post('http://127.0.0.1:8000/api/v1/send/messages/', {
        message:messages,
        sender:auth,
        contact:take_message,
        })
      }
      if(image){
        const formData = new FormData();
        formData.append('image', image);
        formData.append('sender', auth);
        formData.append('contact', take_message);
        console.log(formData);

        await axios.post('http://127.0.0.1:8000/api/v1/send/sendImage/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      }                                                                                                                                    
  }

  return (
    <form onSubmit={handelSubmit} className='flex items-center justify-between px-2 bg-white'>
        <input onChange={(e)=>setMessage(e.target.value)} className='p-2 w-full bg-transparent ' type="text"  placeholder='Type soomthing...'/>
        <div className='flex text-xl gap-2'>
            <i className='hover:text-blue-500 cursor-pointer'><MdAttachFile/></i>
            <label className='hover:text-blue-500 cursor-pointer'><CiImageOn/>
              <input  onChange={(e) => setImage(e.target.files[0])} className='n hidden' type='file' />
            </label>
            <button className='hover:text-blue-500 cursor-pointer'><IoIosSend/></button>
        </div>
    </form>
  )
}

export default SendMessage