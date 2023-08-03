
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerlinks}>
        <a href="#tandc">Terms &amp; Conditions</a>
        <span className={styles.separator}>|</span>
        <a href="#privacy">Privacy Policy</a>
        <span className={styles.separator}>|</span>
        <a href="#contact">Contact Us</a>
      </div>
      <p>© {new Date().getFullYear()} PEGASUS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
