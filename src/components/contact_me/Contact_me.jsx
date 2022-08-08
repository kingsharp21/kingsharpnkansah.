import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact_me.css'

function Contact_me() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tdmi47p', 'template_436w0ae', form.current, 'IEVrP8hY0QqQn7a-a')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          console.log('sent');
      }, (error) => {
          console.log(error.text);
      });
  };
    return ( 
        <div className=" section contact_me">
            <div className="wrapper grid">
                <div className='contact-me-header flex'>
                    <h1 className='heading'>Send me a message!</h1>
                    <span>Got a question or proposal, or just want 
                        to say hello? Go ahead.</span>
                </div>
                <form ref={form} onSubmit={sendEmail} >
                    <div className="visitor-details grid">
                    <div className='detail-col1 flex' >
                        <label htmlFor="">Your Name</label>
                        <input type="text" name="user_name" id="visitor-name" placeholder='Enter your name' required/>
                    </div>
                    <div className='detail-col1 flex'>
                        <label htmlFor="">Email Address</label>
                        <input type="email" name="user_email" id="visitor-email" placeholder='Enter your email address' required/>
                    </div>
                    </div>
                    <div className="message-col flex" data-id="message">
                        <label htmlFor="message"> Your Message</label>
                        <textarea placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?" id="message" name="message" required="required" rows="7" minLength="30"></textarea>
                    </div>

                    <input type="submit" value="Send" id='send-btn' className='btn' />
                </form>
            </div>
        </div>
     );
}

export default Contact_me;