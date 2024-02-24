import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../hook/useForm'
import { useDispatch, useSelector } from 'react-redux';
import {  selectAuth } from '../data/authSlice';

function Login() {
    const data = [
        { name: 'username', type: 'text', id: 1 },
        { name: 'password', type: 'password', id: 2 },
    ]
    const [login, setLogin] = useForm()
    const naviget = useNavigate()
    const dispatch=useDispatch()
    const authId=useSelector(selectAuth)

    const handelSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', {
            username: login.username,
            password: login.password,
        })
        if (response) {
            console.log(response.data);
            const token  = await response.data.access;
            localStorage.setItem('token', token);
            naviget('/')
        }
        else {
            console.log('error something');
        }
    }

    return (
        <div className='w-1/3 m-auto border mt-32 rounded-lg bg-slate-200 p-4'>
            <div className='text-center m-2'>
                <h2 className='font-bold text-cyan-500'>Lama Chat</h2>
                <span>Login</span>
            </div>

            <form onSubmit={handelSubmit} action="">
                {data.map((item) => (
                    <label key={item.id} htmlFor="">{item.name}
                        <input name={item.name} onChange={setLogin} className='w-full bg-transparent border-b-2 border-cyan-500' type={item.type} />
                    </label>
                ))}
                <div className='flex justify-between'>
                    <button className='bg-cyan-500 mt-4 px-2 rounded-md text-white hover:bg-cyan-400'>continum</button>
                    <Link to='/register/' className='bg-orange-500 mt-4 px-2 py-1 rounded-md text-white hover:bg-orange-400'>creat account</Link>
                </div>
            </form>

        </div>
    )
}

export default Login