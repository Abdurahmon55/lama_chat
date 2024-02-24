import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {  selectAuth, selectContact } from '../../data/authSlice'

function Message() {
    const contact = useSelector(selectContact)
    const auth = useSelector(selectAuth)
    const [data, setData] = useState()

    useEffect(() => {

        const getInfo = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/messages/?sender=${auth}&take_message=${contact}`)
                const send = await axios.get(`http://127.0.0.1:8000/api/v1/messages/?sender=${contact}&take_message=${auth}`)
                const res = response && send && [...response.data, ...send.data]
                setData(res.sort((a,b)=>{
                    return a.id-b.id
                  }))
            }
            catch {
                console.log('hato');
            }
        }
        getInfo()

    }, [contact])
    console.log(data);
    return (
        <div className='w-full'>
            {data && data.map((item) => (
                <div key={item.id} className='p-4'>
                    {item.sender == auth ? <div className='w-4/5'>
                        <div className='   flex justify-start '>
                            <span className='text-white p-1 px-2 rounded-lg bg-slate-400 '>{item.message}</span>
                        </div>
                    </div> : <div className='w-4/5 ml-auto mt-4'>
                        <div className='   flex justify-end '>
                            <span className='text-white p-1 px-2 rounded-lg bg-blue-500 '>{item.message}</span>
                        </div>
                    </div>}
                </div>
            ))}
        </div>
    )
}

export default Message

