import React from 'react'
import './pitfalls.css'
import IMG1 from '../../assets/bad-boss-mitarbeiter-tragen-den-anfuehrer_47328-77.jpg'
import IMG2 from '../../assets/1000_F_61161664_BbykH87nD1OTvtMA5tO7vP0N0WS7ZCsb.jpg'
import IMG3 from '../../assets/depositphotos_27771185-stock-illustration-businessman.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The Scrum Master as police agent of Scrum rules instead of team coach',
    
    demo: 'https://www.linkedin.com/pulse/five-common-pitfalls-scrum-masters-how-avoid-them-marco-mulder'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Coordinate teamwork instead of helping to improve self-organization',
    demo: 'https://https://www.linkedin.com/pulse/five-common-pitfalls-scrum-masters-how-avoid-them-marco-mulder.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Insufficient focus on getting work fully Done',
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