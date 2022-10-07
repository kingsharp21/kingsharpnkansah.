import React, { useRef , useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from "react-intersection-observer";
import { useSelector, useDispatch } from 'react-redux'
import { contact } from '../redux/inviewState'

import img_avator from '../../assets/img/avatar on floor-with-phone.png'

import './contact_me.css'

function Contact_me() {
    const contactPage = useSelector(state => state.inview.value.contact)
    const dispatch = useDispatch()
    const { ref, inView } = useInView({ threshold: 0.2 });

    useEffect(() => {
        dispatch(contact(inView)) 
    }, [inView,contactPage.payload])



    //send
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
          console.log('message not sent');
      });
  };
    return ( 
        <div ref={ref} className=" section contact_me flex" id='contact'>
            <div className="wrapper grid">
                <div className='contact-me-header flex'>
                    <h1 className='heading'>Get In Touch !</h1>
                    <span>Got a question or proposal, or just want 
                        to say hello? Go ahead.</span>
                </div>
                <form ref={form} onSubmit={sendEmail} >
                    <div className="visitor-details flex">
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
                        <textarea placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?" id="message" name="message" required="required" rows="7" ></textarea>
                    </div>

                    <button className='btn'>Submit </button>
                </form>
            </div>
                {/* <Confirmation/> */}
            
        </div>
     );
}
function Confirmation() {
    return(
        <div className="confirmation flex">
            <div className="confirm-msg">
                <div className='msg'>
                    <h1>Thank You</h1>
                    <span>Kingsharp has recieced your message</span>
                </div>
                <img className='confirm-msg-pic' src={img_avator} alt="avator" />
            </div>
        </div>
    )
}

export default Contact_me;