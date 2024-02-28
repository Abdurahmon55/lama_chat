import React from 'react'

function Profil() {
  return (
    <div>
        <div className='border-b border-white py-2'>
            <span>Setting</span>
        </div>
        <div className='border-b border-white py-2 hover:text-blue-500'>
            <span className='cu cursor-pointer'>My stories</span>
        </div>
        <div className='border-b border-white py-2 hover:text-blue-500'>
            <span className='cu cursor-pointer'>Save Message</span>
        </div>
        <div className='border-b border-white py-2 hover:text-blue-500'>
            <span className='cu cursor-pointer'>Add stories</span>
        </div>
    </div>
  )
}

export default Profil