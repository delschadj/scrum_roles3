import React from 'react'
import './pitfalls.css'
import IMG1 from '../../assets/tl5.jpg'
import IMG2 from '../../assets/tl6.jpg'
import IMG3 from '../../assets/geschaeftsmann-der-mit-baeren-mit-unten-tendenzdiagramm-schlaeft_47328-361.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Saying ‘Yes’ to everything',
    
    demo: 'https://medium.com/serious-scrum/successful-product-owners-master-the-art-of-saying-no-to-distractions-17d8e78b4ec'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Detailed planning',
    demo: 'https://medium.com/serious-scrum/7-characteristics-of-weak-product-management-eb0a3ca15d1b'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Doesn’t experiment',
    demo: 'https://www.businessinsider.de/wirtschaft/kodak-nokia-blackberry-commodore-grosse-unternehmen-scheitern-r5/'
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