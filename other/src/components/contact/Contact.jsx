import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiTelegramLine} from 'react-icons/ri'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_03lzw2g', 'template_0nt9jn6', form.current, 'QycLA0994j5wWDtGG')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>fasilgetie12@gmail.com</h5>
            <a href="mailto:fasilgetie12@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact_option">
            <RiFacebookCircleLine className='contact_option-icon'/>
            <h4>Facebook</h4>
            <h5>Fasil Getie</h5>
            <a href="https://www.facebook.com/profile.php?id=100043189128936" target='_blank'>Send a Message</a>
          </article>
          <article className="contact_option">
            <RiTelegramLine className='contact_option-icon'/>
            <h4>Telegram</h4>
            <h5>@fasil712</h5>
            <a href="https://t.me/fasilgetie12" target='_blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact