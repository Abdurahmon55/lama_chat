import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {  selectAuth, selectContact } from '../../data/authSlice'
import useFetch from '../../hook/useFetch'
import MessageDetail from './MessageDetail'

function Message() {
    const contact = useSelector(selectContact)
    const auth = useSelector(selectAuth)
    const [data, setData] = useState()

    useEffect(() => {
        const getId = localStorage.getItem('id')
        const getInfo = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/messages/?sender=${auth}&take_message=${contact ? contact : getId}`)
                const send = await axios.get(`http://127.0.0.1:8000/api/v1/messages/?sender=${contact ? contact : getId}&take_message=${auth}`)
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

    return (
        <div className='w-full h-[50vh] overflow-y-scroll'>
            {data && data.map((item) => (
                <MessageDetail key={item.id}{...item}/>
            ))}
        </div>
    )
}

export default Message

