import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Attributes</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Pursues technical excellence</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Respects the Boy Scout Rule.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Trust each other</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Knows their customer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Flexible problem solvers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Accountable for their work</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Tasks</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop the features laid out in the Sprint</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Update the status of the software project to the Project Manager or Tech Lead</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Estimate the amount of time needed to deliver a given task</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Communicate goals and KPIs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Make information available</p>
            </li>
            
            
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Service here</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services