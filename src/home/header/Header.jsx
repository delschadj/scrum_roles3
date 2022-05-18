import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/output-onlinepngtools (6).png"
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello We´re The</h5>
        <h1>Developers</h1>
        <h5 className='text-light'>Scrum Roles Explained</h5>
        <CTA/>
          <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#about" className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header