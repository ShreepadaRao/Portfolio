import React from 'react'
import './experience.css'
import {VscDebugBreakpointLogUnverified} from 'react-icons/vsc'

function Experience() {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <VscDebugBreakpointLogUnverified className='experience__details-icon'/>
            <div><h4>HTML</h4> <small className='text-light'>Intermadiate</small></div>
            </article>
            <article className='experience__details'>
            <VscDebugBreakpointLogUnverified className='experience__details-icon'/>
            <div><h4>CSS</h4> <small className='text-light'>Intermadiate</small></div>
            </article>
            <article className='experience__details'>
            <VscDebugBreakpointLogUnverified className='experience__details-icon'/>
            <div><h4>Java Script</h4> <small className='text-light'>Beginner</small></div>
            </article>
            <article className='experience__details'>
            <VscDebugBreakpointLogUnverified className='experience__details-icon'/>
            <div><h4>React</h4> <small className='text-light'>Beginner</small></div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <VscDebugBreakpointLogUnverified className='experience__details-icon'/>
            <div><h4>Node Js</h4> <small className='text-light'>Beginner</small></div>
            </article>
            <article className='experience__details'>
            <VscDebugBreakpointLogUnverified className='experience__details-icon'/>
            <div><h4>MongoDB</h4> <small className='text-light'>Beginner</small></div>
            </article>
            <article className='experience__details'>
            <VscDebugBreakpointLogUnverified className='experience__details-icon'/>
            <div><h4>My SQL</h4> <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
            <VscDebugBreakpointLogUnverified className='experience__details-icon'/>
            <div><h4>Java</h4> <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Experience