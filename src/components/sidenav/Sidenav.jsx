import React, { useState , useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './sidenav.css'

function Sidenav() {
    const [color , setColor] = useState('white')
    const [current , setCurrent] = useState('red')
    const showcasePage = useSelector(state => state.inview.value.showcase)
    const aboutPage = useSelector(state => state.inview.value.about)
    const projectPage = useSelector(state => state.inview.value.projects)
    const contactPage = useSelector(state => state.inview.value.contact)
    
    // const before = document.querySelector('.menu-btn_burger::before');
    // const after = document.querySelector('.menu-btn_burger::after');
    const [pitch,setPitch] = useState('')
    const curr = document.querySelector('.nav-bullet.current')
    const nav_bullet = Array.from(document.querySelectorAll('.nav-bullet')); 
    useEffect(()=>{
        if (showcasePage.payload === true) {
            setColor('#EEA1BE')
            const index = nav_bullet.indexOf(curr)
            if (index !== 0) {
                nav_bullet[index].classList.remove('current')
                nav_bullet[0].classList.add('current')
            }
          
        }else if (aboutPage.payload === true) {
            setColor('#420FE7')
            const index = nav_bullet.indexOf(curr)
            nav_bullet[index].classList.remove('current')
            nav_bullet[1].classList.add('current')
          
        }else if(projectPage.payload === true){
            setColor('#EEA1BE')
            const index = nav_bullet.indexOf(curr)
            nav_bullet[index].classList.remove('current')
            nav_bullet[2].classList.add('current')
          
        }else if (contactPage.payload === true) {
            setColor('#F3F2F4')
            const index = nav_bullet.indexOf(curr)
            nav_bullet[index].classList.remove('current')
            nav_bullet[3].classList.add('current')
          
        }

    },[showcasePage,aboutPage,projectPage,contactPage])
    return (
        <section className="s3 kfDSgG" aria-label="Main navigation." id="section-nav">
            <div className="wrapper">
            <ul className='flex'>
                <a href="#showcase" title='Go to first section. Pitch.'><li><button type="button" aria-label="Go to first section. Pitch." className="nav-bullet current" style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li></a>
                <a href="#about"  title='Go to second section. About.'><li><button type="button" aria-label="Go to second section. About." className="nav-bullet " style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li></a>
                <a href="#projects" title='Go to third section. Projets.'><li><button type="button" aria-label="Go to third section. Projets." className="nav-bullet " style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li></a>
                <a href="#contact" title='Go to fourth section. Contact.'><li><button type="button" aria-label="Go to fourth section. Contact." className="nav-bullet " style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li></a>
            </ul>
            </div>
        </section>
    );
}

export default Sidenav;