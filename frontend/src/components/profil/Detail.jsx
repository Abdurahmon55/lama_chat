import axios from 'axios'
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'

function Detail({item, url, imageH}) {
    const [toggol, setToggol]=useState(false)

    const deletePost=(id)=>{
        axios.delete(`${url}${id}/`)
        window.location.reload()
    }

    return (
        <>
            {item.image ? <img onClick={() => setToggol(!toggol)} className={`rounded-lg ${imageH} cursor-pointer my-2 `} src={item.image} alt="" /> : null}
            {item.message ? <span onClick={()=>setToggol(!toggol)} className='text-black cursor-pointer'>{item.message}</span> : null}
            {toggol ? <i onClick={() => deletePost(item.id)} className='hover:text-red-500 cursor-pointer hover:text-xl'><MdDelete /></i> : null}
        </>
    )
}

export default Detail