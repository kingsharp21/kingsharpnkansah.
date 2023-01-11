import React, { useState, useEffect , useRef} from 'react';
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux'


import CV from '../../assets/img/KINGSHARP AMPEDU NKANSAH CV AUG Update.pdf'

import './navbar.css'

function Navbar() {
    const [color, setColor] = useState('')
    const showcasePage = useSelector(state => state.inview.value.showcase)
    const aboutPage = useSelector(state => state.inview.value.about)
    const projectPage = useSelector(state => state.inview.value.projects)
    const contactPage = useSelector(state => state.inview.value.contact)


    useEffect(() => {
        if (showcasePage.payload === true) {
            setColor('#EEA1BE')
        } else if (aboutPage.payload === true) {
            setColor('#420FE7')
        } else if (projectPage.payload === true) {
            setColor('#EEA1BE')
        } else if (contactPage.payload === true) {
            setColor('#F3F2F4')
        }

    },[showcasePage,aboutPage,projectPage,contactPage])

    const [btnOpen, setBtnOpen] = useState(false);
    const [btnAction, setBtnAction] = useState('');
    const [menu, setMenu] = useState('hidden');
    const toggle = () => {
        if (!btnOpen) {
            setBtnAction('open');
            setBtnOpen(true)
            setMenu('visible')
        } else {
            setBtnAction('');
            setBtnOpen(false)
            setMenu('hidden')
        }
    }
    function close() {
        if (btnAction === 'open') {
            setBtnAction('');
            setBtnOpen(false)
            setMenu('hidden')
        }
    }
    return (
        <nav>
            <div className='nav-wrapper flex' >
                <div className="nav-left-side flex " >
            
                    <a href="/kingsharpnkansah."><svg xmlns="http://www.w3.org/2000/svg" width="70.672" height="40.267" viewBox="0 0 500.672 600.267" fill={color}>
                        <g id="Group_1" data-name="Group 1" transform="translate(-858.328 -230.364)">
                            <rect id="Rectangle_5" data-name="Rectangle 5" width="100" height="450" rx="75" transform="matrix(0.719, 0.695, -0.695, 0.719, 1044.978, 230.364)" />
                            <rect id="Rectangle_3" data-name="Rectangle 3" width="100" height="250" rx="75" transform="matrix(0.719, 0.695, -0.695, 0.719, 1150.39, 382.47)" />
                            <circle id="Ellipse_2" data-name="Ellipse 2" cx="50" cy="50" r="50" transform="translate(668 252)" />
                            <circle id="Ellipse_4" data-name="Ellipse 4" cx="50" cy="50" r="50" transform="translate(1246 252)" />
                        </g>
                    </svg></a>
                </div>
                <div className="nav-rigth-side flex">
                    <div className={`menu-btn ${btnAction}`} onClick={toggle} >
                        <div className="menu-btn_burger burger1" style={{ backgroundColor: color }}></div>
                        <div className="menu-btn_burger burger2" style={{backgroundColor:color}}></div>
                    </div>
                </div>
                <Toggle_meun menu={menu} />
                <Backdrop close={close} menu={menu} />
            </div>
        </nav>
    );
}

const Toggle_meun = ({ menu }) => {

    const { ref, inView } = useInView({ threshold: 0.2 });
    const animation = useAnimation()
    const animation2 = useAnimation()
    const animation3 = useAnimation()
    const animation4 = useAnimation()
    const animation5 = useAnimation()
    const animation6 = useAnimation()
    const animation7 = useAnimation()
    const animation8 = useAnimation()
    const animation9 = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0, opacity: 1,
                transition: { type: 'spring', duration: 1, delay: .1 }
            })
            animation2.start({
                y: 0, opacity: 1,
                transition: { type: 'spring', duration: 1, delay: .2 }
            })
            animation3.start({
                y: 0, opacity: 1,
                transition: { type: 'spring', duration: 1, delay: .3 }
            })
            animation4.start({
                y: 0, opacity: 1,
                transition: { type: 'spring', duration: 1, delay: .4 }
            })
            animation5.start({
                y: 0, opacity: 1,
                transition: { type: 'spring', duration: 1, delay: .5 }
            })
            animation6.start({
                y: 0, opacity: 1,
                transition: { type: 'spring', duration: 1, delay: .6 }
            })
            animation7.start({
                y: 0, opacity: 1,
                transition: { type: 'spring', duration: 1, delay: 1 }
            })
            animation8.start({
                y: 0, opacity: 1,
                transition: { type: 'spring', duration: 1, delay: 1.2 }
            })
            animation9.start({
                y: 0, opacity: 1,
                transition: { type: 'spring', duration: 1, delay: 1.4 }
            })
        }
        if (!inView) {
            animation.start({
                y: 10, opacity: 0
            })
            animation2.start({
                y: 10, opacity: 0
            })
            animation3.start({
                y: 10, opacity: 0
            })
            animation4.start({
                y: 10, opacity: 0
            })
            animation5.start({
                y: 10, opacity: 0
            })
            animation6.start({
                y: 10, opacity: 0
            })
            animation7.start({
                y: 10, opacity: 0
            })
            animation8.start({
                y: 10, opacity: 0
            })
            animation9.start({
                y: 10, opacity: 0
            })
        }
    }, [inView])

    const [textcopied,setTextcopied] = useState('textnotcopied')
    const copy = () => {
        const copyText = document.querySelector('.email');
        navigator.clipboard.writeText(copyText.textContent)
        setTextcopied("textcopied")
        setTimeout(()=>{
                reset()
        },2000)
    }
    function reset() {
        setTextcopied("textnotcopied")
    }
    return (
        <div ref={ref} className={`toggle_menu ${menu}`}>
            <ul itemScope="itemscope" itemType="http://schema.org/SiteNavigationElement" className="cross-site-nav flex">
                <motion.li animate={animation} data-v-670b333e=""><a data-v-670b333e="" href="kingsharpnkansah./work">My Work</a>
                <span className='stil-dev'>not ready</span></motion.li>
                <motion.li animate={animation2} data-v-670b333e=""><a data-v-670b333e="" href="kingsharpnkansah./gallary">My Gallary</a>
                <span className='stil-dev'>not ready</span></motion.li>
                <motion.li animate={animation3} data-v-670b333e=""><a data-v-670b333e="" href={CV} target="_blank" rel="noreferrer noopener">My Résumé</a></motion.li>
            </ul>
            <div className="basic-contact BsRLL">
                <motion.span animate={animation4} className="say-hello">Say Hello</motion.span>
                    <span id='copied' className={`${textcopied}`}>Copied</span>
                <ul className='mail flex'>
                    <motion.li animate={animation5} data-v-670b333e=""><a data-v-670b333e="" className='email' onClick={copy}>kingsharpn3@gmail.com</a></motion.li>
                    <motion.li animate={animation6} data-v-670b333e=""><a data-v-670b333e="" href="https://t.me/kings_harp" aria-label="t dot me forward slash kings_harp" target="_blank" rel="noreferrer noopener">t.me/kings_harp</a></motion.li>
                </ul>
            </div>
            <ul className="social-contact flex iMAreF">
                <motion.li animate={animation7} data-v-670b333e=""><a data-v-670b333e="" href="https://twitter.com/KingsharpNkans1" aria-label="KingsharpNkans1 on Twitter" target="_blank" rel="noreferrer noopener">TW</a></motion.li>
                <motion.li animate={animation8} data-v-670b333e=""><a data-v-670b333e="" href="https://github.com/kingsharp21" aria-label="kingsharp21 on GitHub" target="_blank" rel="noreferrer noopener">GH</a></motion.li>
                <motion.li animate={animation9} data-v-670b333e=""><a data-v-670b333e="" href="https://www.linkedin.com/in/kingsharp-ampedu-nkansah/" aria-label="kingsharp-ampedu-nkansah on LinkedIn" target="_blank" rel="noreferrer noopener">LN</a></motion.li>
            </ul>
        </div>
    )
}
const Backdrop = ({ close, menu }) => {
    return (
        <div className={`backdrop ${menu}`} onClick={close}>

        </div>
    )
}

export default Navbar;