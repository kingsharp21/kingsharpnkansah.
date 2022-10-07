import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux'
import { projects } from '../redux/inviewState'

import './project.css'
import img from  '../../assets/img/web1.jpg'
import img1 from  '../../assets/img/web2.jpg'

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
               <div className="project-left">
               <motion.section className="project project-1"
                initial={{ y : 100 , opacity: 0}}
                animate={animation}
               >
                <a href="casestudies/colllect.html">
                    <div className="project-img">
                        <img alt="thumb project colllect" src={img}/>
                    </div>
                    <div className="project-desc">
                        <span className="project-number">01</span>
                        <span className="project-arrow"></span> 
                        <span className="project-hover">
                            <span className="project-client">Colllect</span>
                            <span className="project-view">View project</span>
                        </span>
                        <h3>Designing a Visual Bookmark Manager as a Side Project</h3>
                        <p>The journey of designing my first side project, creating the product and landing page with new experimentation.</p>
                    </div>
                </a>
               </motion.section>
               </div>
               <div className="project-rigth">
               <motion.section className="project project-1"
                    initial={{ y : 100 , opacity: 0}}
                    animate={animation}
               >
                <a href="casestudies/colllect.html">
                    <div className="project-img">
                        <img alt="thumb project colllect" src={img1}/>
                    </div>
                    <div className="project-desc">
                        <span className="project-number">02</span>
                        <span className="project-arrow"></span> 
                        <span className="project-hover">
                            <span className="project-client">Colllect</span>
                            <span className="project-view">View project</span>
                        </span>
                        <h3>Designing a Visual Bookmark Manager as a Side Project</h3>
                        <p>The journey of designing my first side project, creating the product and landing page with new experimentation.</p>
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