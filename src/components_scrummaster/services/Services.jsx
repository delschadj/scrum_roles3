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
              <p>Responsible</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Humble</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaborative</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Commited</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Influential</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Knowledgeable</p>
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
              <p>Defining the vision</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Assisting the product owner</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Removing roadblocks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Shielding interference</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Being a servant leader</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Being the process authority</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Coaching team members</p>
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