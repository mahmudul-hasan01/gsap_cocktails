'use client'

import React from 'react';
import {ScrollTrigger, SplitText} from 'gsap/all'
import gsap from 'gsap';
import { navLinks } from '..';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger,SplitText)

const Navbar = () => {

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
      }
    })

    navTween.fromTo('nav', {backgroundColor: 'transparent'}, {
      backgroundColor: '#00000050',
      backgroundFilter: 'bulr(10px)',
      duration: 1,
      ease: 'power1.inOut'
    })
  }, [])

  return (
    <nav>
  <div>
    <a href="#home" className='flex items-center gap-2'>
      <img src='/public/images/logo.png' alt="logo" />
      <p>Velvet Pour</p>
    </a>
    <ul>
      {navLinks.map((link, i) =>(
        <li key={i}>
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  </div>
    </nav>
  );
};

export default Navbar;