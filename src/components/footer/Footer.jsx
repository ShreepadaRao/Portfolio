import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>S</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#Project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Shreepada Y H</small>
      </div>
    </footer>
  )
}

export default Footer