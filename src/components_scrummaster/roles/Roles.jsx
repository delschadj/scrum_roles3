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
          <h3>A Scrum Master Is</h3>

          <div className="roles__content">

            <article className='roles__details'>
              <FcCheckmark className='roles__details-icon' />
              <div>
                <h4>A Servant Leader</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCheckmark className='roles__details-icon' />
              <div>
                <h4>A Facilitator of Scrum Events</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCheckmark className='roles__details-icon' />
              <div>
                <h4>An impediment Remover</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCheckmark className='roles__details-icon' />
              <div>
                <h4>A process coach</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            

          </div>
        </div>

        <div className="roles__backend">
        <h3>A Scum Master Isn´t</h3>

          <div className="roles__content">

            <article className='roles__details'>
              <FcCancel className='roles__details-icon' />
              <div>
                <h4>A "line" manager</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCancel className='roles__details-icon' />
              <div>
                <h4>A task manager</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCancel className='roles__details-icon' />
              <div>
                <h4>A technical or design authority</h4>
                <small className='text-light'>Text here</small>
              </div>
            </article>

            <article className='roles__details'>
              <FcCancel className='roles__details-icon' />
              <div>
                <h4>A decision maker</h4>
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