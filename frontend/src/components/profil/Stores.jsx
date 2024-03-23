import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../data/authSlice'
import useFetch from '../../hook/useFetch'
import Detail from './Detail'

function Stores() {
  const auth = useSelector(selectAuth)
  const [image, setImage] = useState()
  const [titel, setTitel] = useState()

  const HandelSubmit = async () => {
    const formData = new FormData()
    formData.append('image', image)
    formData.append('sender', auth.id)
    await axios.post('http://127.0.0.1:8000/api/v1/profil/post/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    window.location.reload()
  }

  return (
    <div>
      <div className='text-center font-bold '>
        <span>My store</span>
      </div>
      <div className='flex flex-wrap gap-4 bg-slate-200 p-2 h-80 overflow-y-scroll'>
        {auth && auth.post[0] ? auth.post.map((item) => (
          <div key={item.id}>
            <Detail imageH='w-32' item={item} url='http://127.0.0.1:8000/api/v1/profil/post/' />
          </div>
        )) : <span>you have not add store yet</span>}
      </div>
      <div>
        <div className='text-center font-bold'>
          Add store
        </div>
        <div  className='flex flex-col m-2 gap-4 bg-slate-300 p-2 rounded-lg shadow-lg'>
          <label className='hover:text-blue-500 cursor-pointer text-3xl flex' ><CiImageOn />
            <span className='text-sm'>click</span>
            <input onChange={(e) => setImage(e.target.files[0])} className=' hidden' type='file' />
          </label>
          <label className='text-base'>
            <span>image info</span>
            <br />
            <input onChange={(e) => setTitel(e.target.value)} className='rounded-lg p-2' type="text" placeholder='taype' />
          </label>
          <button onClick={HandelSubmit} className='hover:bg-amber-300 bg-amber-400 px-1 rounded-md'>add store</button>
        </div>
      </div>
    </div>
  )
}

export default Stores