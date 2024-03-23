import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  selectProfilePage, setToggol } from '../../data/authSlice'
import Save from './Save'
import Setting from './Setting'
import Stores from './Stores'

function Modal() {
    const dispatch = useDispatch()
    const page = useSelector(selectProfilePage)
    
  return (
    <div>
        <div className='text-end'>
        <button onClick={()=>dispatch(setToggol(false))} className='hover:bg-amber-300 bg-amber-400 px-1 rounded-md'>close</button>
        </div>
        {page && page=='stories' ? <div><Stores/></div> : null}
        {page && page=='add' ? <div><Setting/></div> : null}
        {page && page=='save' ? <div><Save/></div> : null}
    </div>
  )
}

export default Modal