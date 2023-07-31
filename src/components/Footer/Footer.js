import styles from './Footer.module.css'
export const Footer = () =>{
    const phoneNumber = '+359 887999888';
    
    return(
        <div className={styles.footerPage}>
            <p>© {new Date().getFullYear()} Pegasus</p>
            <p>Contact us: <a href="mailto:Pegasus@gmail.com">Pegasus@gmail.com</a></p>
            <p>Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
            <p><a href="/terms-and-conditions">Terms and Conditions</a></p>
        </div>
    )
}