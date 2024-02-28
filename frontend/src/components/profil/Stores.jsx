import React from 'react'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../data/authSlice'
import useFetch from '../../hook/useFetch'

function Stores() {
    const auth = useSelector(selectAuth)
    const [image, setImage]=useFetch(`http://127.0.0.1:8000/api/v1/profil/image/?profil=${auth}`)
  return (
    <div>
        <div className='text-center font-bold '>
            <span>My store</span>
        </div>
        <div className='flex flex-wrap gap-4 bg-slate-200 p-2 '>
            {image && image.map((item)=>(
              <img className='rounded-lg w-32' key={item.id} src={item.image} alt="" />  
            ))}
        </div>
    </div>
  )
}

export default Stores