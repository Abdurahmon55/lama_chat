import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../data/authSlice'

function MessageDetail({ message, sender, id, image }) {
    const auth = useSelector(selectAuth)
    const [toggol, setToggol] = useState(false)

    const messageDetail = () => {
        setToggol(!toggol)
    }

    const Delete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/v1/send/messages/${id}/`)
    }
    return (
        <div className='p-4'>
            {sender == auth ? <div className='w-4/5'>
                <div className='   flex justify-start '>
                    {message ? <span onClick={messageDetail} className='text-white p-1 px-2 cursor-pointer rounded-lg bg-slate-500 hover:bg-slate-400'>{message}</span> : null}
                    {toggol ? <form onSubmit={() => Delete(id)} action="">
                        <button className='bg-red-500 px-2 rounded-lg hover:bg-red-400 hover:text-white'>delete</button>
                    </form> : null} 
                    {image ? <img className='w-20' src={image} alt="" /> : null}
                </div>
            </div> : <div className='w-4/5 ml-auto mt-4'>
                <div className='   flex justify-end '>
                    {message ? <span onClick={messageDetail} className='text-white p-1 px-2 cursor-pointer rounded-lg bg-blue-500 hover:bg-blue-400'>{message}</span> : null}
                    {toggol ? <form onSubmit={() => Delete(id)} action="">
                        <button className='bg-red-500 px-2 rounded-lg hover:bg-red-400 hover:text-white'>delete</button>
                    </form> : null}
                    {image ?  <img className='w-20' src={image} alt="" /> : null}
                </div>
            </div>}
        </div>
    )
}

export default MessageDetail