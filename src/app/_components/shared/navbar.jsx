'use client'

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from 'gsap'
import React from "react";

const Navbar = () => {
  const navLinks = [
    { id: "cocktails", title: "Cocktails" },
    { id: "about", title: "About Us" },
    { id: "work", title: "The Art" },
    { id: "contact", title: "Contact" },
  ];

  const cocktailsLists = [
    {
      name: "Mojito",
      country: "Cuba",
      details: "Refreshing mint and lime cocktail.",
      price: 8.5,
    },
    {
      name: "Margarita",
      country: "Mexico",
      details: "Tequila-based with lime and salt rim.",
      price: 9.0,
    },
    {
      name: "Old Fashioned",
      country: "USA",
      details: "Classic whiskey drink with bitters.",
      price: 11.0,
    },
    {
      name: "Negroni",
      country: "Italy",
      details: "Bittersweet gin, vermouth, and Campari.",
      price: 10.0,
    },
    {
      name: "Pina Colada",
      country: "Puerto Rico",
      details: "Creamy pineapple and coconut mix.",
      price: 9.5,
    },
    {
      name: "Cosmopolitan",
      country: "USA",
      details: "Vodka with cranberry and citrus twist.",
      price: 10.5,
    },
    {
      name: "Caipirinha",
      country: "Brazil",
      details: "Cachaça, lime, and sugar over ice.",
      price: 8.0,
    },
    {
      name: "Mai Tai",
      country: "USA",
      details: "Rum cocktail with citrus and almond.",
      price: 9.75,
    },
  ];

  const mocktailsLists = [
    {
      name: "Mojito",
      country: "Cuba",
      details: "Refreshing mint and lime cocktail.",
      price: 8.5,
    },
    {
      name: "Margarita",
      country: "Mexico",
      details: "Tequila-based with lime and salt rim.",
      price: 9.0,
    },
    {
      name: "Old Fashioned",
      country: "USA",
      details: "Classic whiskey drink with bitters.",
      price: 11.0,
    },
    {
      name: "Negroni",
      country: "Italy",
      details: "Bittersweet gin, vermouth, and Campari.",
      price: 10.0,
    },
    {
      name: "Pina Colada",
      country: "Puerto Rico",
      details: "Creamy pineapple and coconut mix.",
      price: 9.5,
    },
    {
      name: "Cosmopolitan",
      country: "USA",
      details: "Vodka with cranberry and citrus twist.",
      price: 10.5,
    },
    {
      name: "Caipirinha",
      country: "Brazil",
      details: "Cachaça, lime, and sugar over ice.",
      price: 8.0,
    },
    {
      name: "Mai Tai",
      country: "USA",
      details: "Rum cocktail with citrus and almond.",
      price: 9.75,
    },
  ];

  const profileLists = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/45.jpg",
    "https://randomuser.me/api/portraits/men/76.jpg",
    "https://randomuser.me/api/portraits/women/22.jpg",
    "https://randomuser.me/api/portraits/men/15.jpg",
    "https://randomuser.me/api/portraits/women/9.jpg",
    "https://randomuser.me/api/portraits/men/58.jpg",
    "https://randomuser.me/api/portraits/women/81.jpg",
  ];

  const featureLists = [
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly shaken & stirred",
  ];

  const goodLists = [
    "Handpicked ingredients",
    "Signature techniques",
    "Bartending artistry in action",
    "Freshly muddled flavors",
  ];

  const storeInfo = {
    heading: "Where to Find Us",
    address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
    contact: {
      phone: "(555) 987-6543",
      email: "hello@jsmcocktail.com",
    },
  };

  const openingHours = [
    { day: "Mon–Thu", time: "11:00am – 12am" },
    { day: "Fri", time: "11:00am – 2am" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
  ];

  const socials = [
    {
      name: "Instagram",
      icon: "/images/insta.png",
      url: "#",
    },
    {
      name: "X (Twitter)",
      icon: "/images/x.png",
      url: "#",
    },
    {
      name: "Facebook",
      icon: "/images/fb.png",
      url: "#",
    },
  ];


  useGSAP(() => {
    const navTween = gsap.timeline({
        scrollTrigger: {
            trigger: 'nav',
            start: 'botton top'
        }
    })
    navTween.fromTo('nav', {backgroundColor: "transparent"}, {
        backgroundColor: "#00000050",
        backgroundFilter: "blue(10px)",
        duration: 1,
        ease: 'power1.inOut'
    })
  }) 

  return (
    <nav>
      <div className="flex flex-col lg:flex-row justify-between px-28 items-center h-24 pt-5 lg:pt-0 ">
        <a href="#home" className="flex items-center gap-2">
          <Image src="/public/images/logo.png" alt="Logo" width={40} height={40} />
          <p>Velvet Pour</p>
        </a>

        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
