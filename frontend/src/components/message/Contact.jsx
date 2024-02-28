import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { IoIosVideocam } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { LuMoreVertical } from "react-icons/lu";
import { useSelector } from 'react-redux';
import { selectContact } from '../../data/authSlice';
import useFetch from '../../hook/useFetch';

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
        await axios.delete(`http://127.0.0.1:8000/api/v1/profil/contact/${detail[0].id}/`)
        localStorage.removeItem('id')
    }
   
    return (
        <div className='p-5 bg-slate-400 flex justify-between items-center relative'>
            <div>
                <span>{contactInfo ? contactInfo.name : null}</span>
            </div>
            <form onSubmit={contactDetail} className='text-lg flex gap-2'>
                <i className='hover:text-blue-500 cursor-pointer'><IoIosVideocam /></i>
                <i onClick={()=>setToggol(true)} className='hover:text-blue-500 cursor-pointer '><IoPersonSharp /></i>
                <button className='hover:text-blue-500 cursor-pointer'><LuMoreVertical /></button>
            </form>
            {toggol ? <div className='h absolute top-14 right-0 bg-slate-400 w-full'>
                    <span className='text-center block text-white'>store {contactInfo && contactInfo.name}</span>
                    <div className='p-4 flex flex-wrap gap-4'>
                        {contactInfo && contactInfo.images[0]  ? contactInfo.images.map((item)=>(
                            <img className='w-32 rounded-lg' key={item.id} src={item.image} alt="" />
                        )) : <span>have not store</span>}
                    </div>
                    <button onClick={()=>setToggol(false)} className='hover:bg-amber-300 bg-amber-400 px-1 rounded-md'>close</button>
                </div> : null}
        </div>
    )
}

export default Contact