import React from 'react'
import './roles.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FcCheckmark} from "react-icons/fc"
import {FcCancel} from "react-icons/fc"


import {BsXCircleFill} from 'react-icons/bs'


const Roles = () => {
  return (
    <section id='roles'>
      <h5>What I Should and Shouldn´t do</h5>
      <h2>Roles and Commitmens</h2>
      
      <div className="container roles__container">

        <div className="roles__frontend">
          <h3>A Product Owner Should</h3>

          <div className="roles__content">

            <article className='roles__details'>
              <FcCheckmark className='roles__details-icon' />
              <div>
                <h4>Say what needs to get done</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCheckmark className='roles__details-icon' />
              <div>
                <h4>Challenge the team </h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCheckmark className='roles__details-icon' />
              <div>
                <h4>Build a High-performance team</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCheckmark className='roles__details-icon' />
              <div>
                <h4>Practice Business-value driven thinking</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            

          </div>
        </div>

        <div className="roles__backend">
        <h3>A Product Owner Shouldn´t</h3>

          <div className="roles__content">

            <article className='roles__details'>
              <FcCancel className='roles__details-icon' />
              <div>
                <h4>Focus on Short-term deliveries only</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCancel className='roles__details-icon' />
              <div>
                <h4>Panic Before anything happens</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCancel className='roles__details-icon' />
              <div>
                <h4>Say how to do it or how much it will take</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCancel className='roles__details-icon' />
              <div>
                <h4>Stick to the original approach </h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roles