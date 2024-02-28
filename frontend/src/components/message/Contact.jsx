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
    const [contactInfo, setContactInfo] = useState()
    const [toggol, setToggol] = useState(false)
    // const [contact, setContact]=useState()
    const contactId = useSelector(selectContact)

    useEffect(() => {
        const contact = localStorage.getItem('id')
        if (contact) {
            axios.get(`http://127.0.0.1:8000/api/v1/profil/${contactId ? contactId : contact}/`)
                .then(res => setContactInfo(res.data))
        }
    }, [contactId])

    const contactDetail = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/profil/contact/')
        const detail = await response.data.filter((item) => item.contact == contactInfo.id)
        localStorage.removeItem('id')
        await axios.delete(`http://127.0.0.1:8000/api/v1/profil/contact/${detail[0].id}/`)
    }
    // console.log(contact);
    return (
        <div className='p-5 bg-slate-400 flex justify-between items-center'>
            <div>
                <span>{contactInfo ? contactInfo.name : null}</span>
            </div>
            <form onSubmit={contactDetail} className='text-lg flex gap-2'>
                <i className='hover:text-blue-500 cursor-pointer'><IoIosVideocam /></i>
                <i className='hover:text-blue-500 cursor-pointer'><IoPersonSharp /></i>
                <button className='hover:text-blue-500 cursor-pointer'><LuMoreVertical /></button>
            </form>
        </div>
    )
}

export default Contact