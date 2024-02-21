import React from "react";
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo} />
      <Image src="/logo-fvg-blanco.svg" alt="point" width={32} height={32}/>
      <h2 style={{marginLeft: '1rem'}}>My Web App</h2>
    </nav>
  )
}

export default Nav;