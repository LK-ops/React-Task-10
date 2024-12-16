import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const goToAbout = () =>{
        navigate('/about')
    }

    const goToUsers = () =>{
      navigate ('/users')
    }
    
  return (
    <div>
        <button onClick={goToAbout}>About</button>
        <button onClick={goToUsers}>Users</button>
    </div>

  )
}

export default Home