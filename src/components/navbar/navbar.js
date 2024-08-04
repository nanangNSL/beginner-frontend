import React from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router'

const Navbar = () => {
  const navigate  = useNavigate();
  const moveProfile = () => {
    navigate('/profile')
  }
  const moveAddRecipe = () => {
    navigate('/add-recipe')
  }
  const moveHome = () => {
    navigate('/')
  }
  return (
    <div>
        <header className='header-container'>
          <div className='header-left'>
            <nav onClick={moveHome}>Home</nav>
            <nav onClick={moveAddRecipe}>Add Recipe</nav>
            <nav onClick={moveProfile}>Profile</nav>
          </div>
          <div className='header-right'>
            <img src='https://placehold.co/600x400/png' width={"40px"}  height={"40px"} className='avatar'/>
            <button type='button' className='login-button'>Login</button>
          </div>
            
            
        </header>
    </div>
  )
}

export default Navbar