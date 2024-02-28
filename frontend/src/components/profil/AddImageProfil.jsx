import axios from 'axios';
import React, { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { selectAuth } from '../../data/authSlice';

function AddImageProfil() {
    const [image, setImage] = useState()
    const [titel, setTitel] = useState()
    const auth = useSelector(selectAuth)

    const handelSumbmit = async () => {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('desc', titel)
        formData.append('profil', auth)
        try {
            await axios.post('http://127.0.0.1:8000/api/v1/profil/image/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        }
        catch {
            console.log('hato');
        }
    }
    return (
        <div>
            <div className='text-center font-bold'>
                Add store
            </div>
            <form onSubmit={handelSumbmit} className='flex flex-col m-2 gap-4 bg-slate-300 p-2 rounded-lg shadow-lg'>
                <label className='hover:text-blue-500 cursor-pointer text-3xl flex' ><CiImageOn />
                    <span className='text-sm'>click</span>
                    <input onChange={(e) => setImage(e.target.files[0])} className=' hidden' type='file' />
                </label>
                <label className='text-base'>
                    <span>image info</span>
                    <br />
                    <input onChange={(e)=>setTitel(e.target.value)} className='rounded-lg p-2' type="text" placeholder='taype' />
                </label>
                <button className='hover:bg-amber-300 bg-amber-400 px-1 rounded-md'>continum</button>
            </form>
        </div>
    )
}

export default AddImageProfil
