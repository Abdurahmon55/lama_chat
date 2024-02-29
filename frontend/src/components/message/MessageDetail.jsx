import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../data/authSlice'
import { FaSave } from "react-icons/fa";
import { useEffect } from 'react';
import SenderMessage from './SenderMessage';

function MessageDetail({ message, sender, id, image, time, contact, your_boolean_field }) {
    const auth = useSelector(selectAuth)
    const [toggol, setToggol] = useState(false)

    const DeletImage=()=>{
        axios.delete(`http://127.0.0.1:8000/api/v1/send/sendImage/${id}/`)
    }

  


    return (
        <div className='p-4'>
            {sender == auth ? <div className='w-4/5'>
                <div className='   flex justify-start '>
                    <SenderMessage message={message} sender={sender} id={id} image={image} time={time} your_boolean_field={your_boolean_field} contact={contact} style='text-white p-1 px-2 cursor-pointer rounded-lg bg-slate-500 hover:bg-slate-400'/>
                    {image ? <div className='flex'>
                        <img onClick={()=>setToggol(!toggol)} className='w-20' src={image} alt="" />
                        {toggol ? <form onSubmit={DeletImage}>
                            <button className='bg-red-500 px-2 rounded-lg hover:bg-red-400 hover:text-white'>delete</button>
                        </form> : null}
                    </div> : null}
                </div>
            </div> : <div className='w-4/5 ml-auto mt-4'>
                <div className='   flex justify-end '>
                <SenderMessage message={message} sender={sender} id={id} image={image} time={time} your_boolean_field={your_boolean_field} contact={contact} style='text-white p-1 px-2 cursor-pointer rounded-lg bg-blue-500 hover:bg-blue-400'/>
                    {image ?  <div className='flex'>
                        
                        {toggol ? <form onSubmit={DeletImage}>
                            <button className='bg-red-500 px-2 rounded-lg hover:bg-red-400 hover:text-white'>delete</button>
                        </form> : null}
                        <img onClick={()=>setToggol(!toggol)} className='w-20' src={image} alt="" />
                    </div> : null}
                </div>
            </div>}
        </div>
    )
}

export default MessageDetail