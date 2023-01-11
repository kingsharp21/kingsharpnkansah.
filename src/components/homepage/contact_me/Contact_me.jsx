import React, { useRef , useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from "react-intersection-observer";
import { useSelector, useDispatch } from 'react-redux'
import { contact } from '../../redux/inviewState'

// import img_avator from '../../../assets/img/avatar on floor-with-phone.png'

import './contact_me.css'

function Contact_me() {
    const contactPage = useSelector(state => state.inview.value.contact)
    const dispatch = useDispatch()
    const { ref, inView } = useInView({ threshold: 0.2 });

    useEffect(() => {
        dispatch(contact(inView)) 
    }, [inView,contactPage.payload])



    //send
    const [msgsent, setMsgsent] = useState('hidden');
    const [msgnotsent, setMsgNOTsent] = useState('hidden');
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tdmi47p', 'template_436w0ae', form.current, 'IEVrP8hY0QqQn7a-a')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          setMsgsent('notifyUser')
      }, (error) => {
          setMsgNOTsent('notifyUser')
          console.log(error.text);
          console.log('message not sent');
      });

    };

    function exits() {
        setMsgsent('hidden')
        setMsgNOTsent('hidden')
    }
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
                <Confirmation sent={msgsent} notsent={msgnotsent} fxn={exits} />
            
        </div>
     );
}
function Confirmation({sent,fxn,notsent}) {
    
    return(
        <>
        <div className={`confirmation flex ${sent}`}>
            <div className="confirm-msg">
                <h2>Thank You</h2>
                {/* <img className='confirm-msg-pic' src={img_avator} alt="avator" /> */}
                <div className='confirm-msg-pic sent'></div>
                <p>Your message has been sent</p>
                <button  onClick={fxn}>Okay</button>
            </div>
        </div>
        <div className={`confirmation flex ${notsent}`}>
            <div className="confirm-msg">
                <h2>Sorry !!!</h2>
                <div className='confirm-msg-pic not-sent'></div>
                <p>Your message was not sent</p>
                <button  onClick={fxn}>Okay</button>
            </div>
        </div>
        
        </>
    )
}

export default Contact_me;