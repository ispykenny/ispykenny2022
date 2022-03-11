import { useState } from 'react';
import { NextPage } from 'next';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { Container } from 'components/layouts/Grid/Grid';


export const Nav:NextPage = () => {
  const [navShowing, setNavShowing] = useState<boolean>(false);
  const [showingUl, setShowingUl] = useState<boolean>(false)

  const closeNav = () => {
    setNavShowing(false)
    setShowingUl(false)
  };

  const openNav = () => {
    setNavShowing(prev => !prev)
    setTimeout(() => {
      setShowingUl(prev => !prev)
    }, 0)
  }

  return (
    <header className={
      `${styles.header} ${navShowing ? styles.activeNav :''}`
    }>
      <Container>
        <div className={styles.nav}>
          <div className={styles.navInner}>
            <div className={styles.navEl}>
              <div className={styles.logo}>
                <Link href="/">
                  <a href="#" onClick={closeNav}>
                    ispykenny
                  </a>
                </Link>
                <button 
                  onClick={openNav}
                  className={styles.navButton}>
                  <span className={styles.sr}>Menu</span>
                  <span className={styles.navButtonSpan}></span>
                  <span className={styles.navButtonSpan}></span>
                  <span className={styles.navButtonSpan}></span>
                </button>
              </div>
            </div>
            <div 
              className={styles.navEl}>
              <nav className={`${styles.navMenu} ${showingUl && styles.showingUl}`}>
                <ul className={styles.navUl}>
                  <li>
                    <Link href="/about-me"><a onClick={closeNav}>About me</a></Link>
                  </li>
                  <li>
                    <Link href="/links"><a onClick={closeNav}>My Socials</a></Link>
                  </li>
                  <li>
                    <Link href="/blogs">
                      <a onClick={closeNav}>Blogs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:kenny.krosky@gmail.com?subject=Email%20from%20your%20website">
                      <a onClick={closeNav}>
                        Get in Touch 👋
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}