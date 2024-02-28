import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAuth, selectContact } from '../../data/authSlice'
import useData from '../../hook/useData'
import useFetch from '../../hook/useFetch'
import MessageDetail from './MessageDetail'

function Message() {
    const contact = useSelector(selectContact)
    const [bigData, setBigdata]=useData()
    const auth = useSelector(selectAuth)
    const [data, setData] = useState()
    const [imageData, setImageData] = useState()
    const [allData, setAllData]=useState()

    const getImge = async () => {
        const getId = localStorage.getItem('id')
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/v1/send/sendImage/?sender=${auth && auth}&contact=${contact ? contact : getId}`)
            const send = await axios.get(`http://127.0.0.1:8000/api/v1/send/sendImage/?sender=${contact ? contact : getId}&contact=${auth && auth}`)

            const rest = response && send && [...response.data, ...send.data]
            setBigdata(rest)
            setImageData(rest.sort((a, b) => {
                return a.id - b.id
            }))
        }
        catch {
            console.log('hato');
        }
    }

    useEffect(() => {

        const getInfo = async () => {
            const getId = localStorage.getItem('id')
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/send/messages/?sender=${auth && auth}&contact=${contact ? contact : getId}`)
                const send = await axios.get(`http://127.0.0.1:8000/api/v1/send/messages/?sender=${contact ? contact : getId}&contact=${auth && auth}`)

                const res = response && send && [...response.data, ...send.data]
                setBigdata(res)
                setData(res.sort((a, b) => {
                    return a.id - b.id
                }))
            }
            catch {
                console.log('hato');
            }
        }
        getInfo()
        getImge()

    }, [contact])
    console.log();

    return (
        <div className=' flex flex-col justify-end '>
            <div className='w-full h-[50vh] overflow-y-scroll'>
                {data && data.map((item) => (
                    <MessageDetail key={item.id}{...item} />
                ))}
                {imageData && imageData.map((item) => (
                    <MessageDetail key={item.id}{...item} />
                ))}
            </div>

        </div>
    )
}

export default Message

