import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPgae, setToggol } from '../../data/authSlice'
import AddImageProfil from './AddImageProfil'
import Stores from './Stores'

function Modal() {
    const dispatch = useDispatch()
    const page = useSelector(selectPgae)
    
  return (
    <div>
        <div className='text-end'>
        <button onClick={()=>dispatch(setToggol(false))} className='hover:bg-amber-300 bg-amber-400 px-1 rounded-md'>close</button>
        </div>
        {page && page=='stories' ? <div><Stores/></div> : null}
        {page && page=='add' ? <div><AddImageProfil/></div> : null}
    </div>
  )
}

export default Modal