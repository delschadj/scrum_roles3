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
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Efficient Listener</h5>
            </article>

            <article className="about__card">
              <MdCancel className='about__icon' />
              <h5>Can say, NO</h5>
            </article>

          </div>

          <p>
          Product Owners are the face of the project and one of the most important professionals in developing and launching a product in a company. They are also responsible for the success of the product and have the authority to decide what needs to be developed and when.

          Generally, the Product Owner role is filled by a business-oriented person, as they are expected to understand the market, the product, the business, and the constraints involved. A product owner has a clear vision for the product and works closely with internal stakeholders, customers, and the development team. The main role of a product owner is to communicate between stakeholders and developers and help the team develop a product that adds value for customers.
          </p>
          <a href="#roles" className="btn btn-primary">My Roles</a>

        </div>

      </div>

    </section>
  )
}

export default About