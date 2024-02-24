import React from 'react'
import useForm from '../hook/useForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Register() {
    const data = [
        { name: 'username', type:'text', id: 1 },
        { name: 'email', type:'email', id: 2 },
        { name: 'password1', type:'password', id: 3 },
        { name: 'password2', type:'password', id: 4 },
    ]
    const [value, setValue]=useForm()
    const naviget= useNavigate()
   
    const handelSubmit=async(e)=>{
        e.preventDefault()
        try{
        const response= await axios.post('http://127.0.0.1:8000/api/v1/registration/', {
                username:value.username,
                email:value.email,
                password1:value.password1,
                password2:value.password2,
            })
            if(response.status==204){
                naviget('/login/')
            }
        }
        catch{
            console.log('hato');

        }
    }
    return (
        <div className='w-1/3 m-auto border mt-32 rounded-lg bg-slate-200 p-4'>
            <div className='text-center m-2'>
                <h2 className='font-bold text-cyan-500'>Lama Chat</h2>
                <span>Register</span>
            </div>

            <form onSubmit={handelSubmit} action="">
                {data.map((item) => (
                    <label key={item.id} htmlFor="">{item.name}
                        <input name={item.name} onChange={setValue} className='w-full bg-transparent border-b-2 border-cyan-500' type={item.type} />
                    </label>
                ))}
                <button className='bg-cyan-500 mt-4 px-2 rounded-md text-white hover:bg-cyan-400'>continum</button>
            </form>
        </div>
    )
}

export default Register