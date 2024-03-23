import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { IoIosVideocam } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { LuMoreVertical } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { selectContact, setContact } from '../../data/authSlice';

function ContactDetail() {
    const [contactInfo, setContactInfo] = useState()
    const [toggol, setToggol] = useState(false)
    const contact = useSelector(selectContact)
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('contactId')) {
            if (!contact) {
                const detail = localStorage.getItem('contactId')
                axios.get(`http://127.0.0.1:8000/api/v1/profil/${detail}/`)
                    .then(res => dispatch(setContact(res.data)))
            }
        }
    }, [])

    const Delete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/v1/profil/contact/${id}/`)
        localStorage.removeItem('contactId')
        window.location.reload()
    }

    return (
        <div className='p-5 bg-slate-400 flex justify-between items-center relative'>
            <div>
                <span>{contact ? contact.username : <span>click contack</span>}</span>
            </div>
            <div className='text-lg flex gap-2'>
                <i className='hover:text-blue-500 cursor-pointer'><IoIosVideocam /></i>
                <i onClick={() => setToggol(!toggol)} className='hover:text-blue-500 cursor-pointer '><IoPersonSharp /></i>
                <button onClick={() => Delete(contact && contact.id)} className='hover:text-blue-500 cursor-pointer'><LuMoreVertical /></button>
            </div>
            {toggol ? <div className='h absolute top-14 right-0 bg-slate-400 w-full'>
                <span className='text-center block text-white'>store {contact ? contact.username : null}</span>
                <div className='p-4 flex flex-wrap gap-4'>
                    {contact && contact.post[0] ? contact.post.map((item) => (
                        <img className='w-32 rounded-lg' key={item.id} src={item.image} alt="" />
                    )) : <span>have not store</span>}
                </div>
                <button onClick={() => setToggol(false)} className='hover:bg-amber-300 bg-amber-400 px-1 rounded-md'>close</button>
            </div> : null}
        </div>
    )
}

export default ContactDetail 