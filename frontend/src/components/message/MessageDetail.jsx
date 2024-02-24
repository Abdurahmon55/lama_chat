import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../data/authSlice'

function MessageDetail({message, sender, id}) {
    const auth = useSelector(selectAuth)
    const [toggol, setToggol]=useState(false)

    const messageDetail=()=>{
        setToggol(!toggol)
    }

    const Delete=(id)=>{
        axios.delete(`http://127.0.0.1:8000/api/v1/messages/${id}/`)
    }
    return (
        <div className='p-4'>
            {sender == auth ? <div className='w-4/5'>
                <div className='   flex justify-start '>
                    <span onClick={messageDetail} className='text-white p-1 px-2 cursor-pointer rounded-lg bg-slate-400 hover:bg-slate-300 '>{message}</span>
                    {toggol ? <form onSubmit={()=>Delete(id)} action="">
                    <button className='bg-red-500 px-2 rounded-lg hover:bg-red-400 hover:text-white'>delete</button>
                    </form>  : null}
                </div>
            </div> : <div className='w-4/5 ml-auto mt-4'>
                <div className='   flex justify-end '>
                    <span onClick={messageDetail} className='text-white p-1 px-2 cursor-pointer rounded-lg bg-blue-500 hover:bg-blue-400'>{message}</span>
                    {toggol ? <form onSubmit={()=>Delete(id)} action="">
                    <button className='bg-red-500 px-2 rounded-lg hover:bg-red-400 hover:text-white'>delete</button>
                    </form>  : null}
                </div>
            </div>}
        </div>
    )
}

export default MessageDetail