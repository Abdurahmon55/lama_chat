import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectToggol, setPage, setProfilePage, setToggol } from '../../data/authSlice'

function Profil() {
    const toggol = useSelector(selectToggol)
    const dispatch = useDispatch()

    const page=(titel)=>{
        dispatch(setToggol(true))
        dispatch(setProfilePage(titel))
    }

  return (
    <div>
        <div className='border-b border-white py-2'>
            <span>Setting</span>
        </div>
        <div className='border-b border-white py-2 hover:text-blue-500'>
            <span onClick={()=>page('stories')} className='cursor-pointer'>My stories</span>
        </div>
        <div className='border-b border-white py-2 hover:text-blue-500'>
            <span onClick={()=>page('save')} className='cursor-pointer'>Save Message</span>
        </div>
        <div className='border-b border-white py-2 hover:text-blue-500'>
            <span onClick={()=>page('add')} className='cursor-pointer'>my detail</span>
        </div>
    </div>
  )
}

export default Profil