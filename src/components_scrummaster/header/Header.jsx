import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/output-onlinepngtools (3).png"
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I´m The</h5>
        <h1>Scrum Master</h1>
        <h5 className='text-light'>Scrum Roles Explained</h5>
        <CTA/>
          <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header