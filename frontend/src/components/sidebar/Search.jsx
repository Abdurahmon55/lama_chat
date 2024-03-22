import React, { useState } from 'react'
import useFetch from '../../hook/useFetch'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../data/authSlice';
import { VscChromeClose } from "react-icons/vsc";

function Search() {
    const authId = useSelector(selectAuth)
    const [data, err] = useFetch('http://127.0.0.1:8000/api/v1/profil/')
    const [toggol, setToggol] = useState(false)
    const [change, setChange] = useState()

    const handelChange = (value) => {
        setChange(value)
        setToggol(true)
    }

    const handelSubmit = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/api/v1/profil/contact/', {
                your_boolean_field: true,
                sender: authId,
                contact: [change],
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))

        }
        catch {
            console.log('hato');
        }
    }

    return (
        <div>
            <label htmlFor="">
                <input onChange={(e) => handelChange(e.target.value)} className='bg-transparent p-2 w-full' type="text" placeholder='search' />
            </label>
            <div className='relative'>
                {toggol ? <div className='absolute bg-white w-full'>
                    <i onClick={() => setToggol(false)} className='text-lg font-bold hover:text-red-500 cursor-pointer absolute right-0'><VscChromeClose /></i>
                    <form onSubmit={handelSubmit} action="">
                        {data && data.map((item) => (
                            <div key={item.id} className='k hover:bg-slate-200 cursor-pointer px-2  mt-2'>
                                <button className='flex gap-2'>
                                    <span onClick={() => setChange(item.id)}>{item.name}</span>
                                </button>
                            </div>
                        ))}

                    </form>

                </div> : null}
            </div>
        </div>
    )
}

export default Search