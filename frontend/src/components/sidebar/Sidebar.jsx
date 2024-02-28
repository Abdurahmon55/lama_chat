import React from 'react'
import useFetch from '../../hook/useFetch'
import userImg from '../../image/default.jpg'
import { useNavigate } from 'react-router-dom'
import { selectAuth } from '../../data/authSlice'
import { useSelector } from 'react-redux'
import ContactName from './ContactName'
import Search from './Search'
import { useState } from 'react'
import Profil from './Profil'

function Sidebar() {
    const authId = useSelector(selectAuth)
    const [toggol, setToggol] = useState(false)
    const naviget = useNavigate()

    const sigiOut = () => {
        localStorage.clear()
        naviget('/login/')
    }
    const [profil, err] = useFetch(`http://127.0.0.1:8000/api/v1/profil/?user=${authId}`)
    const [detail, error] = useFetch(`http://127.0.0.1:8000/api/v1/profil/image/?profil=${authId}`)

    return (
        <div>
            <div className='text-white bg-slate-500 p-2 flex justify-between items-center relative'>
                <div><h2 className='text-xs font-bold hover:text-blue-500 cursor-pointer'>Lama chat</h2></div>
                <div className='flex'>
                    {detail && detail[0] ? <img className='w-8 m-2 rounded-full' src={detail && detail[0].image} alt="" /> : <img className='w-8 m-2 rounded-full' src={userImg} alt="" />}
                    <div className='flex flex-col  justify-center items-center'>
                        <span onClick={()=>setToggol(true)} className='cursor-pointer hover:text-blue-500'>{profil && profil[0].name}</span>
                        <form onSubmit={sigiOut} action="">
                            <button className='hover:bg-amber-300 bg-amber-400 px-1 rounded-md'>sing out</button>
                        </form>

                    </div>
                </div>
                {toggol ? <div className='absolute top-16 bg-slate-400 p-2 w-full right-0'><Profil/>
                <div className='text-end'><button onClick={()=>setToggol(false)} className='hover:bg-amber-300 bg-amber-400 px-1 rounded-md mt-2 '>close</button></div>
                </div> : null}
            </div>
            <div>
                <Search />
            </div>
            <div className='h-[50vh] overflow-y-scroll'>
                {!profil ? null : profil && profil[0].profil.map((item, index) => (
                    <ContactName key={index}{...item} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar