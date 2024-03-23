import React from 'react'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../data/authSlice'
import useFetch from '../../hook/useFetch'
import Detail from './Detail'

function Save() {
    const auth = useSelector(selectAuth)
    const [toggol, setToggol]=useState(false)

    const deleteSaveMessage=()=>{
        
    }
  return (
    <div className='p-2'>
        <div className='text-center font-bold'><span>Save</span></div>
        <div>
            {auth && auth.save[0] ? auth.save.map((item)=>(
                <div key={item.id}>
                    <Detail item={item} url='http://127.0.0.1:8000/api/v1/profil/message/save/' imageH='w-44'/>
                </div>
            )) : <span>you have not save message yet</span>}
        </div>
    </div>
  )
}

export default Save