import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDebugValue } from 'react'
import { useDispatch } from 'react-redux'
import { setContact } from '../../data/authSlice'
import useFetch from '../../hook/useFetch'
import userImg from '../../image/default.jpg'

function ContactName({contact}) {
    const [ContactName, err]=useFetch(`http://127.0.0.1:8000/api/v1/profil/?user=${contact[0]}`)
    const dispatch=useDispatch()
    const [contactInfo, setContactInfo]=useState()

    const addLocastoreg=(id)=>{
        localStorage.setItem('id', id)
        dispatch(setContact(id))
    }

    useEffect(()=>{
        const contactId = localStorage.getItem('id')
        const ContactImage=async()=>{
            await axios.get(`http://127.0.0.1:8000/api/v1/profil/image/?profil=${contact ? contact : contactId}`)
            .then(res=>setContactInfo(res.data))
            .catch(err=>console.log(err))
        }
        ContactImage()

    },[])


    return (
        <div className='flex gap-2 hover:bg-slate-500 p-2 cursor-pointer'>
            <div>
                {contactInfo && contactInfo[0] ? <img className='w-10 h-10 rounded-full ' src={contactInfo[0].image} alt="" /> : <img className='w-8 rounded-full' src={userImg} alt="" />}
            </div>
            <div onClick={()=>addLocastoreg(ContactName && ContactName[0].user)} className='flex flex-col'>
                <span className='text-xs font-semibold'>{ContactName && ContactName[0].name}</span>
                <span className='text-xs'>Lorem ipsum dolor sit.</span>
            </div>
        </div>

    )
}

export default ContactName