import React from 'react'
import './Contact.css'
import FigureExample from './ProfileImage'
import whatsAppLogo from '../Images/whatsappLogo.png'
import gmailLogo from '../Images/gmail.png'



export default function Contact() {
  return (
    <div className='main-contact'>
      <div className='sub-contact'>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" />
          <hr />
          <label htmlFor="">Email</label>
          <input type="email" />
          <hr />
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>
      <div className='sub-contact-two'>
        <FigureExample width={78} height={80} image={whatsAppLogo} text='+54 03467-15419938'/>
        <FigureExample width={78} height={80} image={gmailLogo} text='alfondrums@gmail.com'/>
      </div>
    </div>
  )
}
