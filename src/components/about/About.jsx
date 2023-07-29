import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import {FaAward} from "react-icons/fa"
import {BsPersonWorkspace} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <BsPersonWorkspace className='about__icon'/>
              <h5>Approachable</h5>
              <small>Opent To Work</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Completed Projects</small>
            </article>
            
          </div>
          <p>Motivated Software Engineer graduate from Presidency University,Bengaluru with strong coding skills. Eager to expand skills in software development and gain practical experience. Committed to continuously learning and staying updated in the ever-evolving field of software engineering.</p>
          <a href="contact"className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About