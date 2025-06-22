'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../Styles/Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.NavBar}>
      <div className={styles.logo}>
       <Image
          src="/Images/logo.svg"
          alt="Logo"
          width={120}
          height={60}
          style={{ width: "150px", height: "auto" }}
        />

      </div>

      <div
        className={`${styles.navlinks} ${isOpen ? styles.active : ''}`}
      >
        <Link href="/" onClick={closeNavbar}>Home</Link>
        <Link href="/About" onClick={closeNavbar}>About</Link>
        <Link href="/Menu" onClick={closeNavbar}>Menu</Link>
        <Link href="/Gallary" onClick={closeNavbar}>Gallary</Link>
        <Link href="/Contact" onClick={closeNavbar}>Contact Us</Link>
      </div>

      <div className={styles.hamburger} onClick={toggleNavbar}>
        {isOpen ? <FaTimes color="#D19B38" size={24} /> : <FaBars color="#D19B38" size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;
