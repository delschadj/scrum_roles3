import React from 'react'
import "./about.css"
import ME from "../../assets/tl1.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import {MdCancel} from "react-icons/md"


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Smart decision maker</h5>
              <small>Text here</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Efficient Listener</h5>
              <small>Text here</small>
            </article>

            <article className="about__card">
              <MdCancel className='about__icon' />
              <h5>Can say, NO</h5>
              <small>Text here</small>
            </article>

          </div>

          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <a href="contact" className="btn btn-primary">My Roles</a>

        </div>

      </div>

    </section>
  )
}

export default About