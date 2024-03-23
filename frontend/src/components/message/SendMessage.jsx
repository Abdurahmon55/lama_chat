import React from 'react'
import { MdAttachFile } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../data/authSlice';

function SendMessage() {
  const [messages, setMessage]=useState()
  const auth = useSelector(selectAuth)
  const [image, setImage] = useState()

  const handelSubmit = async ()=>{
    const contactId= localStorage.getItem('contactId')
    const response = await axios.post('http://127.0.0.1:8000/api/v1/profil/message/', {
      sender:auth.id,
      contact:contactId,
    })
    if(response.data.id){
      const formData = new FormData()
      formData.append('sendMessage', response.data.id)
      if(image){
        formData.append('image', image)
      }
      if(messages){
        formData.append('message', messages)
      }
      const res = await axios.post('http://127.0.0.1:8000/api/v1/profil/message/sendMessage/', formData, {
        headers: {
                'Content-Type': 'multipart/form-data'
            }
      })
    }
    window.location.reload()
  }

  return (
    <div  className='flex items-center justify-between px-2 bg-white'>
        <input onChange={(e)=>setMessage(e.target.value)} className='p-2 w-full bg-transparent ' type="text"  placeholder='Type soomthing...'/>
        <div className='flex text-xl gap-2'>
            <i className='hover:text-blue-500 cursor-pointer'><MdAttachFile/></i>
            <label className='hover:text-blue-500 cursor-pointer'><CiImageOn/>
              <input  onChange={(e) => setImage(e.target.files[0])} className='n hidden' type='file' />
            </label>
            <button onClick={handelSubmit} className='hover:text-blue-500 cursor-pointer'><IoIosSend/></button>
        </div>
    </div>
  )
}

export default SendMessage