import React from 'react';
import Link from 'next/link';
import styles from '../Styles/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.getInTouch}>
          <div>
            <p>Get In Touch</p>
          </div>
          <div className={styles.mail}>
            <img src="/Images/email.png" alt="email icon" />
            <p>sachin.trimurti@gmail.com</p>
          </div>
          <div className={styles.call}>
            <img src="/Images/call.png" alt="call icon" />
            <p>9822662826 / 7330212020</p>
          </div>
          <div className={styles.site}>
            <img src="/Images/web.png" alt="website icon" />
            <p>www.trimurticaterers.in</p>
          </div>
        </div>

        <div className={styles.links}>
          <ul>
            <li>Quick Links</li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Menu">Menu</Link></li>
            <li><Link href="/Gallary">Gallary</Link></li>
            <li><Link href="/Contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1054.7367177376213!2d73.9817323154233!3d18.497640846985455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3627776de99%3A0x66fc0120a320d3b5!2sTrimurti%20caterers!5e1!3m2!1sen!2sin!4v1744384197560!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className={styles.copyCredit}>
        <div className={styles.copy}>
          <p>© TRIMURTI CATERERS 2025 All Rights Reserved</p>
        </div>
        <div className={styles.credit}>
          <p>Designed and Developed By Siddheshwar Rede</p>
        </div>
      </div>

      <div className={styles.gold}>
        <img src="/Images/sideGold.png" alt="Decorative Gold Element" />
      </div>
        <div className={styles.gold1}>
        <img src="/Images/sideGold.png" alt="Decorative Gold Element" />
      </div>
    </div>
  );
};

export default Footer;
