import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { async } from '@firebase/util'
import { auth } from './config'
import { Navigate, useNavigate } from 'react-router-dom'

function App() {  
  const Navigate = useNavigate()
  const logingoogle = async () => {
    const data = await signInWithPopup(auth, new GoogleAuthProvider())
    console.log(data)
    Navigate(`/Home/${data.user.email}`)
  }
  return (
    <div className='App'>
      <button onClick={logingoogle}>Login</button>
    </div>
  )

}

export default App