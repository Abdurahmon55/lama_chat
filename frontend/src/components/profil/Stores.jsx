import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../data/authSlice'
import useFetch from '../../hook/useFetch'

function Stores() {
    const auth = useSelector(selectAuth)
    const [image, setImage]=useFetch(`http://127.0.0.1:8000/api/v1/profil/image/?profil=${auth}`)
    const [toggol, setToggol]=useState(false)
    const [imageDetail, setImageDetail]=useState()
    
  return (
    <div>
        <div className='text-center font-bold '>
            <span>My store</span>
        </div>
        <div className='flex flex-wrap gap-4 bg-slate-200 p-2 '>
            {image && image[0] ? image.map((item)=>(
              <div key={item.id}>
                <img onClick={()=>setToggol(!toggol)} className='rounded-lg w-32'  src={item.image} alt="" />
              </div>
            )) : <span>you have not add store yet</span>}
        </div>
    </div>
  )
}

export default Stores