import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';
import { selectAuth } from '../../data/authSlice';

function ReadMessage({ message, stayle, hadStayle, senderId, contactId }) {
    const [toggol, setToggol] = useState(false)
    const [have, setHave] = useState(true)
    const auth = useSelector(selectAuth)

    const messageDetail = () => {
        setToggol(!toggol)
    }

    const Delete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/v1/profil/message/${id}/`)
        window.location.reload()
    }

    const saveMessage = async (data) => {
        const formData = new FormData()
        if (data[0].message) {
            formData.append('message', data[0].message)
        }
        if (data[0].image) {
            formData.append('image', data[0].image)
        }
        if (senderId == auth.id) {
            formData.append('sender', senderId)
            formData.append('contact', contactId)
            formData.append('call', 'sent')
        }
        else {
            formData.append('sender', contactId)
            formData.append('contact', senderId)
            formData.append('call', 'accepted')
        }

        formData.append('messageId', data[0].sendMessage)

        const response = await axios.post('http://127.0.0.1:8000/api/v1/profil/message/save/', formData, {
            headers: {
               'Content-Type': 'multipart/form-data'
            } 
        })
    }

    return (
        <div className={`${hadStayle}`}>
                {message[0].message ? <span onClick={messageDetail} className={`${stayle} px-2 rounded-md cursor-pointer`}>{message[0].message ? message[0].message : null}</span> : null}
                <br />
                {message[0].image ? <img onClick={messageDetail} className={`${stayle} w-20 h-16 cursor-pointer`} src={message[0].image ? message[0].image : null} alt="" /> : null}
            {toggol ? <div className='flex gap-1 items-center'>
                <i onClick={() => Delete(message[0].sendMessage)} className='hover:text-red-500 cursor-pointer hover:text-xl'><MdDelete /></i>
                {have ? <i onClick={() => saveMessage(message)} className='text-green-500 cursor-pointer hover:text-xl hover:text-red-500'><FaSave /></i> : <i className='text-red-500 cursor-pointer hover:text-xl hover:text-green-500'><FaSave /></i>}
            </div> : null}
        </div>
    )
}

export default ReadMessage