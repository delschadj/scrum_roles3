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
              <p>Ability to Say ‘No’</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Motivator</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Communicator</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Domain Knowledge</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Influencer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Emotional Intelligence</p>
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
              <p>Managing the product backlog</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prioritizing needs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Anticipating client needs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Evaluating product progress at each iteration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Acting as primary liaison</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Overseeing development stages</p>
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