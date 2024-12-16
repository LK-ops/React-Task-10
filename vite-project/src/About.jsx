import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate('/');
    }
  return (
    <div>
        <button onClick={goToHome}>Home</button>
    </div>
  )
}

export default About