import React, { useState, useEffect } from 'react';
import './about_me.css'
import handsome from '../../assets/img/handsome.jpg'
function About_Me() {
    // const [num, SetNum]= useState(null)
    // useEffect(()=> {
    //     const about_me = document.querySelector('.about-me');
    //     let rect = about_me.getBoundingClientRect()
    //     SetNum(rect.y)
    //     console.log(rect);  
    // })
    // console.log(num);
    

    return ( 
        <section className="section s2 about-me ">
            <div className="about-wrapper wrapper">
            {/* <h1 className='section-tag'>About Me</h1> */}
           
            <div className="content-wrap">
				<div className="content content--layout content--layout-1">
					<div className="content__img" ></div>
					<h3 className="content__title">Hello...</h3>
					<p className="content__author">Kingsharp</p>
					<p className="content__desc">
                    I'm <span>Kingsharp</span>, Full-Stack Developer base Accra-Ghana. i have worked 
                    with several companies onsite and remotely  

                    </p>
					<a href="#" className="content__link">Discover</a>
				</div>
			</div>
            {/* <div className="about-wrapper wrapper grid"></div> */}
            {/* <Skill/> */}
            </div>
        </section>
     );
}

const Skill = ()=>{
    return(
        <div className="skill">
            <div className='wrapper'>
                <h1>kki</h1>
            </div>

        </div>
    )
}

export default About_Me;