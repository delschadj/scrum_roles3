import React from 'react'
import './pitfalls.css'
import IMG1 from '../../assets/getty_1169538423_2000127320009280345_sjnj76.jpg'
import IMG2 from '../../assets/adw123.png'
import IMG3 from '../../assets/vectorstock_31719941.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Starting with the technology First',
    
    demo: 'https://www.linkedin.com/pulse/five-common-pitfalls-scrum-masters-how-avoid-them-marco-mulder'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Not having any Scrum meetings',
    demo: 'https://https://www.linkedin.com/pulse/five-common-pitfalls-scrum-masters-how-avoid-them-marco-mulder.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Doesn’t know their customer',
    demo: 'https://https://www.linkedin.com/pulse/five-common-pitfalls-scrum-masters-how-avoid-them-marco-mulder.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
]


const Pitfalls = () => {
  return (
    <section id='pitfalls'>
      <h5>What could go wrong</h5>
      <h2>Pitfalls</h2>

      <div className="container pitfalls__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='pitfalls__item'>
              <div className="pitfalls__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="pitfalls__item-cta">
                <a href={demo} className='btn btn-primary' target='_blank'>Case Study</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Pitfalls