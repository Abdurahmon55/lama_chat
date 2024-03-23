import React from 'react'
import userImg from '../../image/default.jpg'
import { selectAuth, selectToggol, setProfilePage, setToggol } from '../../data/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import ContactName from './ContactName'
import Search from './Search'
import { useState } from 'react'
import Profil from '../profil/Profil'

function Sidebar() {
    const detail = useSelector(selectAuth)
    const toggol = useSelector(selectToggol)
    const dispatch = useDispatch()

    const sigiOut = () => {
        localStorage.clear()
        window.location.reload()
    }

    const showProfil = () => {
        dispatch(setToggol(true))
        dispatch(setProfilePage('stories'))
        if (toggol) {
            dispatch(setToggol(false))
        }
    }

    const close = () => {
        dispatch(setToggol(false))
    }


    return (
        <div>
            <div className='text-white bg-slate-500 p-2 flex justify-between items-center relative'>
                <div><h2 className='text-xs font-bold hover:text-blue-500 cursor-pointer'>Lama chat</h2></div>
                <div className='flex'>
                    <img className='w-8 m-2 rounded-full' src={detail && detail.detail[0] ? detail.detail[0].image : userImg} alt="" />
                    <div className='flex flex-col  justify-center items-center'>
                        <span onClick={showProfil} className='cursor-pointer hover:text-blue-500'>{detail && detail.username}</span>
                        <button onClick={sigiOut} className='hover:bg-amber-300 bg-amber-400 px-1 rounded-md'>sing out</button>
                    </div>
                </div>
                {toggol ? <div className='absolute top-16 bg-slate-400 p-2 w-full right-0'><Profil />
                    <div className='text-end'><button onClick={close} className='hover:bg-amber-300 bg-amber-400 px-1 rounded-md mt-2 '>close</button></div>
                </div> : null}
            </div>
            <div>
                <Search />
            </div>
            <div className='h-[50vh] overflow-y-scroll'>
                {detail ? detail.contacts.map((item, index) => (
                    <ContactName key={index}{...item} />
                )) : null}
            </div>
        </div>
    )
}

export default Sidebar