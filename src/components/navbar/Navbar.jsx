import React, { useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './navbar.css'
import logo from '../../assets/img/page_logo.svg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Navbar() {
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
        if (btnAction == 'open') {
            setBtnAction('');
            setBtnOpen(false)
            setMenu('hidden')
        }
    }
    const svg = document.querySelector('.logo-img path')
    anime({
        targets: svg,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        // delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
      });

    return (
        <nav className=''>
            <div className='nav-wrapper wrapper flex' >
                <div className="nav-left-side flex " >
                    {/* <div className="logo-img"></div> */}
                    <svg className="logo-img" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px">
                        <path d="M 14.519531 4.0097656 C 14.239531 3.9997656 14 4.2295312 14 4.5195312 L 14 6.5 C 14 6.78 14.22 7 14.5 7 L 14.5 7.0195312 C 20.73 7.2595312 25.740469 12.27 25.980469 18.5 L 26 18.5 C 26 18.78 26.22 19 26.5 19 L 28.480469 19 C 28.770469 19 29.000234 18.760469 28.990234 18.480469 C 28.720234 10.620469 22.379531 4.2797656 14.519531 4.0097656 z M 14.519531 9.0097656 C 14.239531 8.9997656 14 9.2395313 14 9.5195312 L 14 11.5 C 14 11.78 14.22 12 14.5 12 L 14.5 12.029297 C 17.97 12.259297 20.740703 15.03 20.970703 18.5 L 21 18.5 C 21 18.78 21.22 19 21.5 19 L 23.480469 19 C 23.760469 19 24.000234 18.760469 23.990234 18.480469 C 23.720234 13.380469 19.619531 9.2797656 14.519531 9.0097656 z M 5.5 10 C 5.22 10 5 10.22 5 10.5 L 5 21.5 C 5 25.08 7.92 28 11.5 28 C 15.08 28 18 25.08 18 21.5 C 18 17.92 15.08 15 11.5 15 C 11.22 15 11 15.22 11 15.5 L 11 18.5 C 11 18.78 11.22 19 11.5 19 C 12.88 19 14 20.12 14 21.5 C 14 22.88 12.88 24 11.5 24 C 10.12 24 9 22.88 9 21.5 L 9 10.5 C 9 10.22 8.78 10 8.5 10 L 5.5 10 z" />
                    </svg>
                </div>
                <div className="nav-rigth-side flex">
                    <div className={`menu-btn ${btnAction}`} onClick={toggle}>
                        <div className="menu-btn_burger"></div>
                    </div>
                    {/* <div className='nav-social'>
                    <a aria-label='social icon linked in' className='social-icon' href="#" target='_blank'><LinkedInIcon/></a>
                    <span className='nav-title title'>Linked In</span>
                    </div>
                    <div className='nav-social'>
                    <a aria-label='GitHub repository' className='nav-title social-icon' href="#" target='_blank'><GitHubIcon/></a>
                    <span className='nav-title title'>GitHub repository</span>
                    </div> */}
                    {/* <button className='nav-btn btn'>Contact Me</button> */}
                </div>
                <Toggle_meun menu={menu} />
                <Backdrop close={close} menu={menu} />
            </div>
        </nav>
    );
}


const Toggle_meun = ({ menu }) => {
    const copy = () => {
        const copyText = document.querySelector('.email');
        navigator.clipboard.writeText(copyText.textContent)
    }
    return (
        <div className={`toggle_menu ${menu}`}>
            <ul itemScope="itemscope" itemType="http://schema.org/SiteNavigationElement" className="cross-site-nav flex">
                <li data-v-670b333e=""><a data-v-670b333e="" href="https://olaolu.dev/work">My Work</a></li>
                <li data-v-670b333e=""><a data-v-670b333e="" href="https://olaolu.dev/shelf">My Shelf</a></li>
                <li data-v-670b333e=""><a data-v-670b333e="" href="https://olaolu.dev/resume" target="_blank" rel="noreferrer noopener">My Résumé</a></li>
            </ul>
            <div className="basic-contact BsRLL"><span className="say-hello">Say Hello</span>
                <ul className='mail flex'>
                    <li data-v-670b333e=""><a data-v-670b333e="" className='email' onClick={copy}>kingsharpn3@gmail.com</a></li>
                    <li data-v-670b333e=""><a data-v-670b333e="" href="https://t.me/kings_harp" aria-label="t dot me forward slash mrolaolu" target="_blank" rel="noreferrer noopener">t.me/kings_harp</a></li>
                </ul>
            </div>
            <ul className="social-contact flex iMAreF"><li data-v-670b333e=""><a data-v-670b333e="" href="https://twitter.com/KingsharpNkans1" aria-label="Olaolu on Twitter" target="_blank" rel="noreferrer noopener">TW</a></li>
                <li data-v-670b333e=""><a data-v-670b333e="" href="https://github.com/kingsharp21" aria-label="Olaolu on GitHub" target="_blank" rel="noreferrer noopener">GH</a></li>
                <li data-v-670b333e=""><a data-v-670b333e="" href="https://www.linkedin.com/in/kingsharp-ampedu-nkansah/" aria-label="Olaolu on LinkedIn" target="_blank" rel="noreferrer noopener">LN</a></li>
                {/* <li data-v-670b333e=""><a data-v-670b333e="" href="https://youtube.com/channel/UC5UiydmTsiN17NmsYmmWqEA" aria-label="Olaolu's YouTube channel" target="_blank" rel="noreferrer noopener">YT</a></li> */}
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