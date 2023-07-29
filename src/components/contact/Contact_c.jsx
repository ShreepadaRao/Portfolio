import React from 'react'
import './contact.css'
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact_c() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qw2hyab', 'template_z84kakk', form.current, 'YOUR_PUBLIC_KEY')
    e.target.reser()
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailUnread className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>shreepadarao02@gmail.com</h5>
            <a href="mailto:shreepadarao02@gmail.com" target='_black'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>What'sApp</h4>
            <h5>+91 98765 43210</h5>
            <a href="https://api.whatsapp.com/send?phone+919380956650" target='_black'>Send a message</a>
          </article>
        </div>

        <form action="/contact" method="post" ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact_c
