import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { IoIosVideocam } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { LuMoreVertical } from "react-icons/lu";
import { useSelector } from 'react-redux';
import { selectContact } from '../../data/authSlice';

function Contact() {
    const [contactInfo, setContactInfo]=useState()
    const contactId = useSelector(selectContact)

    useEffect(()=>{
        const contact = localStorage.getItem('id')
        if(contact){
            axios.get(`http://127.0.0.1:8000/api/v1/user/${contactId ? contactId : contact}/`)
            .then(res=>setContactInfo(res.data))
        }
    },[contactId])

  return (
    <div className='p-5 bg-slate-400 flex justify-between items-center'>
        <div>
            <span>{contactInfo && contactInfo.username}</span>
        </div>
        <div className='text-lg flex gap-2'>
            <i className='hover:text-blue-500 cursor-pointer'><IoIosVideocam/></i>
            <i className='hover:text-blue-500 cursor-pointer'><IoPersonSharp/></i>
            <i className='hover:text-blue-500 cursor-pointer'><LuMoreVertical/></i>
        </div>
    </div>
  )
}

export default Contact