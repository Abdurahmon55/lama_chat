import React from 'react'
import useFetch from '../../hook/useFetch'
import userImg from '../../image/default.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { selectAuth, setContact } from '../../data/authSlice'
import { useDispatch, useSelector } from 'react-redux'
function Sidebar() {
    const [contact, error] = useFetch('http://127.0.0.1:8000/api/v1/user/')
    const authId = useSelector(selectAuth)
    const dispatch=useDispatch()
    const auth = contact && contact.find((item)=>item.id==authId)
    const naviget = useNavigate()

    const sigiOut = () => {
        localStorage.clear()
        naviget('/login/')
    }
    return (
        <div>
            <div className='text-white bg-slate-500 p-2 flex justify-between items-center'>
                <div><h2 className='text-xs font-bold hover:text-blue-500 cursor-pointer'>Lama chat</h2></div>
                <div className='flex'>
                    <img className='w-8 m-2 rounded-full' src={userImg} alt="" />
                    <div className='flex flex-col  justify-center'>
                        <span>{auth && auth.username}</span>
                        <form onSubmit={sigiOut} action="">
                            <button className='hover:bg-amber-300 bg-amber-400 px-1 rounded-md'>sing out</button>
                        </form>

                    </div>
                </div>
            </div>
            <div>
                <input className='bg-transparent p-2 w-full' type="text" placeholder='search' />
            </div>
            <div className='h-[50vh] overflow-y-scroll'>
                {contact && contact.map((item) => (
                    <div key={item.id} >
                        {item.id==authId ? null :
                        <div className='flex gap-2 hover:bg-slate-500 p-2 cursor-pointer'>
                            <div>
                                <img className='w-8 rounded-full' src={userImg} alt="" />
                            </div>
                            <div onClick={()=>dispatch(setContact(item.id))} className='flex flex-col'>
                                <span className='text-xs font-semibold'>{item.username}</span>
                                <span className='text-xs'>Lorem ipsum dolor sit.</span>
                            </div>
                        </div>  }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar