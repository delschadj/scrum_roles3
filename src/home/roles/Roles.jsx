import React from 'react'
import './roles.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FcCheckmark} from "react-icons/fc"
import {FcCancel} from "react-icons/fc"


import {BsXCircleFill} from 'react-icons/bs'


const Roles = () => {
  return (
    <section id='roles'>
      <h5>What We Should and Shouldn´t do</h5>
      <h2>Roles and Commitmens</h2>
      
      <div className="container roles__container">

        <div className="roles__frontend">
          <h3>A Development Team Should</h3>

          <div className="roles__content">

            <article className='roles__details'>
              <FcCheckmark className='roles__details-icon' />
              <div>
                <h4>Apply team swarming</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCheckmark className='roles__details-icon' />
              <div>
                <h4>Knows their customer </h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCheckmark className='roles__details-icon' />
              <div>
                <h4>Share experiences</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCheckmark className='roles__details-icon' />
              <div>
                <h4>Deliver features during the sprint</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            

          </div>
        </div>

        <div className="roles__backend">
        <h3>A Development Team Shouldn´t</h3>

          <div className="roles__content">

            <article className='roles__details'>
              <FcCancel className='roles__details-icon' />
              <div>
                <h4>Need a Definition of Done</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCancel className='roles__details-icon' />
              <div>
                <h4>No titles</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCancel className='roles__details-icon' />
              <div>
                <h4>No sub-teams</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCancel className='roles__details-icon' />
              <div>
                <h4>Need story points</h4>
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