import axios from 'axios'
import React, { useState } from 'react'
import { FaSave } from "react-icons/fa";

function SenderMessage({ message, sender, id, time, contact, your_boolean_field, style }) {
    const [toggol, setToggol] = useState(false)

    const messageDetail = () => {
        setToggol(!toggol)
    }

    const Delete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/v1/send/messages/${id}/`)
    }

    const addDetail = () => {
        axios.put(`http://127.0.0.1:8000/api/v1/send/messages/${id}/`, {
            message: message,
            your_boolean_field: true,
            time: time,
            sender: sender,
            contact: contact,
        })
        axios.post('http://127.0.0.1:8000/api/v1/profil/save/', {
            messageId: id,
            message: message,
            profil: sender,
        })
    }

    const deletDetail = async () => {
        await axios.put(`http://127.0.0.1:8000/api/v1/send/messages/${id}/`, {
            message: message,
            your_boolean_field: false,
            time: time,
            sender: sender,
            contact: contact,
        })
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/profil/save/?profil=&messageId=${id}`)
        await axios.delete(`http://127.0.0.1:8000/api/v1/profil/save/${response.data[0].id}/`)
    }

    return (
        <div className='flex'>
            {message ? <span onClick={messageDetail} className={style}>{message}</span> : null}
            {toggol ? <form onSubmit={() => Delete(id)} action="">
                <button className='bg-red-500 px-2 rounded-lg hover:bg-red-400 hover:text-white'>delete</button>
                {your_boolean_field ? <span onClick={deletDetail} className='mt-5 cursor-pointer text-yellow-500'><FaSave /></span> : <span onClick={addDetail} className='mt-5 cursor-pointer'><FaSave /></span>}
            </form> : null}
        </div>
    )
}

export default SenderMessage