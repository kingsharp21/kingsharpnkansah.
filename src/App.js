import React, { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Navbar from './components/navbar/Navbar'
import Showcase from './components/showcase/Showcase';
import About_Me from './components/about/About_Me';
import Projects from './components/projects/Projects';
import Sidenav from './components/sidenav/Sidenav';
import Contact_me from './components/contact_me/Contact_me';
import './App.css';
import { css } from '@emotion/react';

function App() {
  const [num, SetNum]= useState(null)
  function scrollEvent () {
    const about_me = document.querySelector('.about-me');
    const showcase = document.querySelector('.showcase');
    const contact_me = document.querySelector('.contact_me');
    let rect = about_me.getBoundingClientRect()
    let rect1 = showcase.getBoundingClientRect()
    let rect2 = contact_me.getBoundingClientRect()
    // SetNum(rect.top) 
    // console.log(num);
    const logo = document.querySelector('.logo-img')
    const menu_btn_burger = document.querySelector('.menu-btn_burger')
    if (rect.top < 20) {
      console.log('Section 2');
      logo.style.fill = '#4C4944'
      menu_btn_burger.style.backgroundColor = '#4C4944'
    }else{
      logo.style.fill = 'black'
    }
    if (rect1.top == 0) {
      console.log('Section 1');
      logo.style.fill = 'white'
      logo.style.fill = '#4C4944'
    }
    if (rect2.top == 0) {
      console.log('Section 3');
      logo.style.fill = 'green'
    }
  } 
  return (
    <>
    <Navbar/>
    <Sidenav/>
    <div id="fullpage" onScroll={scrollEvent}>
    <Showcase/>
    <About_Me/>
    <Projects/>
    <Contact_me/>
    </div>
    </>
  );
}

export default App;
