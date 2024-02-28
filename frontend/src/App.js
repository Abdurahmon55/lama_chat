import React, { useEffect } from 'react'
import Home from './page/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Register from './page/Register'
import Login from './page/Login'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, selectAuth } from './data/authSlice'
import { jwtDecode } from 'jwt-decode'
import Message from './components/message/Message'
import axios from 'axios'
function App() {

  const authId = useSelector(selectAuth)
  const dispatch = useDispatch()
  const naviget = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(getAuth(decoded.user_id))
    }
    else {
      naviget('/login/')
    }
  }, []);

  return (
    <div>
      <Routes>
        {authId ?
            <Route path="/" element={<Home />} />
          : null}
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />
      </Routes>

    </div>
  )
}

export default App