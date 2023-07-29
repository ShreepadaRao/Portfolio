import React from 'react'
import './project.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'

/* USEING METHOD */ 
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Responsive Travel and Tourist Webpage',
    github: 'https://github.com/coderviews/responsive-webpage'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Listing Job Availabilities (Using Java Springboot and MongoDB)',
    github: 'https://github.com/coderviews/Listing-Jobs'
  },
  {
    id: 3,
    image: IMG3,
    title: 'MERN-Full Stack Project',
    github: 'https://github.com/coderviews/Listing-Jobs'
  },
]

function Project() {
  return (
    <section id='porject'>
      <h5>My Reacent Work</h5>
      <h2>Projects</h2>
      <div className="container project__container">{
        data.map(({id, image, title, github}) =>{
          return(
            <article key={id}className='porject__item'>
              <div className="project__item-image">
              <img src={image} alt={title}/>
              <h3>{title}</h3>
              <div className="project__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
            </div>
          </div>
        </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Project; 