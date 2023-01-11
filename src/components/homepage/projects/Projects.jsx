import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux'
import { projects } from '../../redux/inviewState'

import './project.css'
import img from  '../../../assets/img/guest a number shot.jpg'
import img1 from  '../../../assets/img/travel.jpg'

function Projects() {
    const projectPage = useSelector(state => state.inview.value.projects)
    const dispatch = useDispatch()

    const { ref , inView} = useInView({threshold:0.2});
    const animation = useAnimation()
    

    useEffect(()=>{
        if (inView) {
            animation.start({
                y: 0 , opacity: 1 ,
                transition:{type:'spring' , duration:1 , bounce:0.3 , delay:.1}
            })
        }
        dispatch(projects(inView)) 
    },[inView],projectPage.payload)

    return ( 
        <section className='section my-project flex' id="projects">
            <div ref={ref} className="project-wrapper wrapper grid">
            {/* <h1>few Projetcs</h1> */}
               <div className="project-left">
               <motion.section className="project project-1"
                initial={{ y : 100 , opacity: 0}}
                animate={animation}
               >
                <a href="https://kingsharp21.github.io/GuestANumber/" target='_blank'>
                    <div className="project-img">
                        <img alt="thumb project colllect" src={img}/>
                    </div>
                    <div className="project-desc">
                        <span className="project-number">01</span>
                        <span className="project-arrow"></span> 
                        <span className="project-hover">
                            {/* <span className="project-client">Colllect</span> */}
                            <span className="project-view">WebApp</span>
                        </span>
                        <h3>Designed Guess My Number Game </h3>
                        <p>The Game was built with HTML, CSS and JavaScript. 
                            It is a one player game that requires the player to guest a number and type it into the input field. 
                            The game picks a random number without displaying it to the player.</p>
                    </div>
                </a>
               </motion.section>
               </div>
               <div className="project-rigth">
               <motion.section className="project project-1"
                    initial={{ y : 100 , opacity: 0}}
                    animate={animation}
               >
                <a href="https://kingsharp21.github.io/country-tour-advisor/" target='_blank'>
                    <div className="project-img">
                        <img alt="thumb project colllect" src={img1}/>
                    </div>
                    <div className="project-desc">
                        <span className="project-number">02</span>
                        <span className="project-arrow"></span> 
                        <span className="project-hover">
                            {/* <span className="project-client">Colllect</span> */}
                            <span className="project-view">WebApp</span>
                        </span>
                        <h3>Travel Companion</h3>
                        <p>The travel companion web app helps users plan for their trips. Using this app users can find several information such the various restaurants, 
                            hotel and attraction in the country or city they intend to visit.</p>
                    </div>
                </a>
               </motion.section>
               </div>
               <div className="project-control">
                    {/* <p>View next projects</p> */}
               </div>
            </div>

        </section>
     );
}

export default Projects;