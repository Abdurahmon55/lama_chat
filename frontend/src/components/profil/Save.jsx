import React from 'react'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../data/authSlice'
import useFetch from '../../hook/useFetch'

function Save() {
    const auth = useSelector(selectAuth)
    const [save, err]=useFetch(`http://127.0.0.1:8000/api/v1/profil/save/?profil=${auth}`)
    console.log(save);
  return (
    <div >
        <div className='text-center font-bold'><span>Save</span></div>
        <div>
            {save && save[0] ? save.map((item)=>(
                <div key={item.id}>
                    <span className='text-black'>{item.message}</span>
                </div>
            )) : <span>you have not save message yet</span>}
        </div>
    </div>
  )
}

export default Save