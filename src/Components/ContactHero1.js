import React from 'react'
import styles from '../Styles/ContactHero1.module.css'

const ContactHero1 = () => {
  return (
    <>
      <div className={styles['lets-Connect']}>
        <h1>Lets Connect</h1>
      </div>
      <div>
        <div className={styles.boxes}>
          <a href="tel:+919697982020">
            <div className={styles.box}>
              <img src="/Images/call1.png" alt="Call Icon" />
              <h3>Phone</h3>
            </div>
          </a>

          <a
            href="https://www.instagram.com/trimurti_caterers_2020?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.box}>
              <img src="/Images/insta1.png" alt="Instagram" />
              <h3>Instagram</h3>
            </div>
          </a>

          <a href="https://wa.me/919697982020" target="_blank" rel="noopener noreferrer">
            <div className={styles.box}>
              <img src="/Images/whatsApp1.png" alt="WhatsApp Icon" />
              <h3>Whatsapp</h3>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default ContactHero1
