import React, { useEffect } from 'react'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'
import Register from './page/Register'
import Login from './page/Login'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth, selectAuth, setPage, selectPgae } from './data/authSlice'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
function App() {

  const authId = useSelector(selectAuth)
  const page = useSelector(selectPgae)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      axios.get(`http://127.0.0.1:8000/api/v1/profil/${decoded.user_id}/`)
      .then(res=>dispatch(setAuth(res.data))) 
    }
    else {
      dispatch(setPage('login'))
    }
  }, []);

  return (
    <div>
      {page=='login' ? <Login/> : null}
      {page==''? <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes> : null}
    </div>
  )
}

export default App