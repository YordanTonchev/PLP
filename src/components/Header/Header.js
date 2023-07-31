import styles from './Header.module.css'
export const Header = () =>{
    
    return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/pic1.jpg" alt="Logo" className={styles.logoImg}/> 
        <span className={styles.logoText}>PEGASUS</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a className={styles.link} href="/">Shoes</a></li>
          <li className={styles.navItem}><a className={styles.link} href="/about">Jewels</a></li>
          <li className={styles.navItem}><a className={styles.link} href="/contact">Watches</a></li>
        </ul>
      </nav>
    </header>
    )
}