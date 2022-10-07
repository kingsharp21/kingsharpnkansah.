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
    
    const curr = document.querySelector('.nav-bullet.current')
    useEffect(()=>{
        if (showcasePage.payload == true) {
            setColor('#EEA1BE')
            curr.style.backgroundColor = 'transparent';
        }else if (aboutPage.payload === true) {
            setColor('#420FE7')
            curr.style.backgroundColor = 'transparent';
        }else if(projectPage.payload == true){
            setColor('#18033C')
            curr.style.backgroundColor = 'transparent';
        }else if (contactPage.payload == true) {
            // setColor('#18033C')
            setColor('#F3F2F4')
            curr.style.backgroundColor = 'transparent';
        }

    })
    return (
        <section className="s3 kfDSgG" aria-label="Main navigation." id="section-nav">
            <div className="wrapper">
            <ul className='flex'>
                <a href="#showcase"><li><button type="button" aria-label="Go to first section. Pitch." className="nav-bullet current" style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li></a>
                <a href="#about"><li><button type="button" aria-label="Go to first section. Pitch." className="nav-bullet " style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li></a>
                <a href="#projects"><li><button type="button" aria-label="Go to first section. Pitch." className="nav-bullet " style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li></a>
                <a href="#contact"><li><button type="button" aria-label="Go to first section. Pitch." className="nav-bullet " style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li></a>
                {/* <a href="#projects"><li><button type="button" aria-label="Go to first section. Pitch." className="nav-bullet " style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li></a> */}
                {/* <li><button type="button" aria-label="Go to second section. Cornerstone." className="nav-bullet" style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li>
                <li><button type="button" aria-label="Go to third section. Experience." className="nav-bullet " style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li>
                <li><button type="button" aria-label="Go to fourth section. Carriageway." className="nav-bullet" style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li>
                <li><button type="button" aria-label="Go to fifth section. Contact." className="nav-bullet current" style={{backgroundColor:color, border:`1.5px solid ${color}`}}></button></li> */}
            </ul>
            </div>
        </section>
    );
}

export default Sidenav;