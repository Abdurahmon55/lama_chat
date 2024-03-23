import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAuth, selectContact } from '../../data/authSlice'
import ReadMessage from './ReadMessage'

function Message() {
    const contact = useSelector(selectContact)
    const auth = useSelector(selectAuth)
    const [data, setData] = useState()

    useEffect(() => {
        const contactId = localStorage.getItem('contactId')
        const GetMessage = async () => {
            const id = contactId ? contactId : null
            if (id) {
                const senderMessage = await axios.get(`http://127.0.0.1:8000/api/v1/profil/message/?sender=${auth && auth.id}&contact=${id}`)
                const contactMessage = await axios.get(`http://127.0.0.1:8000/api/v1/profil/message/?sender=${id}&contact=${auth && auth.id}`)

                const rest = senderMessage && contactMessage && [...senderMessage.data, ...contactMessage.data]
                setData(rest.sort((a, b) => {
                    return a.id - b.id
                }))
            }
        }
        GetMessage()
    }, [contact])

    return (
        <div className=' flex flex-col justify-end '>
            <div className='w-full h-[50vh] overflow-y-scroll px-2'>
                {data && data.map((item) => (
                    <div key={item.id} className='p-1 flex  '>
                    {item.sender == auth.id ?
                        <ReadMessage message={item.messages} stayle='bg-slate-400' hadStayle='w-10/12 flex mr-auto' senderId={item.sender} contactId={item.contact} />
                        :
                        <ReadMessage message={item.messages} hadStayle=' flex  w-10/12  ml-auto ' stayle='bg-slate-500 ml-auto ' senderId={item.sender} contactId={item.contact} />
                    }
                </div>
                ))}
            </div>

        </div>
    )
}

export default Message

