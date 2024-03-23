import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../data/authSlice'
import useForm from '../../hook/useForm'
import userImg from '../../image/default.jpg'
import { IoEnter } from "react-icons/io5";
import { CiImageOn } from 'react-icons/ci'
import { MdOutlineError } from "react-icons/md";
import axios from 'axios'
import Detail from './Detail'

function Setting() {
    const auth = useSelector(selectAuth)
    const [error, setError] = useState(false)
    const [image, setImage] = useState()

    const imageSubmit = async () => {
        try{
            const formData = new FormData()
            formData.append('image', image)
            formData.append('sender', auth.id)
            await axios.post('http://127.0.0.1:8000/api/v1/profil/detail/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            window.location.reload()
        } 
        catch{
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000)
        }
            
            
    
    }


    return (
        <div>
            <div className='l bg-slate-200 h-80 pt-4 rounded-b-3xl relative z-10'>
                <div className=' flex flex-col items-center'>
                    <img className='w-32 h-32 rounded-full' src={auth.detail[0] ? auth.detail[0].image : userImg} alt="" />
                    <h2 className='font-bold'>{auth.username}</h2>
                    <span>{auth && auth.detail[0] ? auth.detail[0].bio : 'have not status'}</span>
                    <span className='font-semibold'>pofile image</span>
                </div>
                <div className='m-2 flex overflow-x-scroll gap-2'>
                    {auth.detail[0] ? auth.detail.map((item) => (
                        <div key={item.id}>
                            <Detail imageH='w-20 h-12' item={item} url='http://127.0.0.1:8000/api/v1/profil/detail/' />
                        </div>
                    )) : null}
                </div>
            </div>
            <div className='relative'>
                <div className='absolute bg-amber-400 w-full top-[-20px] '>
                    <div className='text-center mt-5'>
                        <span className='font-semibold'>add image</span>
                    </div>
                    <div className=' flex items-center gap-4'>
                        <label className='hover:text-green-500 cursor-pointer text-2xl'><CiImageOn /> <span className='o text-base'>choose image </span>
                            <input onChange={(e) => setImage(e.target.files[0])} className='hidden' type='file' />
                        </label>
                        <button onClick={imageSubmit} className='hover:text-green-500'><IoEnter /></button>
                        {error ? <i className='text-red-800 text-2xl'><MdOutlineError /> not image choose</i> : null}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Setting