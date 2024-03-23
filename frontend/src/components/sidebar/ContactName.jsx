import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setContact } from '../../data/authSlice'
import useFetch from '../../hook/useFetch'
import userImg from '../../image/default.jpg'

function ContactName({contact}) {
    const [ContactName, err]=useFetch(`http://127.0.0.1:8000/api/v1/profil/${contact[0]}/`)
    const dispatch=useDispatch()
    const [contactInfo, setContactInfo]=useState()

    const contactDetail=(detail)=>{
        localStorage.setItem('contactId', detail.id)
        dispatch(setContact(detail))
    }


    
    return (
        <div className='flex gap-2 hover:bg-slate-500 p-2 cursor-pointer'>
             <div>
                 <img className='w-8 h-8 rounded-full' src={ContactName && ContactName.detail[0] ? ContactName.detail[0].image : userImg} alt="" />
            </div>
            <div onClick={()=>contactDetail(ContactName && ContactName)}  className='flex flex-col'>
                <span className='text-xs font-semibold'>{ContactName && ContactName.username}</span>
                <span className='text-xs'>Lorem ipsum dolor sit.</span>
            </div> 
        </div>

    )
}

export default ContactName