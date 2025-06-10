import React from 'react';
import styles from '../Styles/AboutHero1.module.css'; // ✅ Already using CSS Module

const AboutHero1 = () => {
  return (
    <>
      <div className={styles.fullscreenBg}>
        <img
          className={styles.largeImage}
          src="/Images/image-large.jpg"
          alt="Background"
        />

        <div className={styles.overlayText}>
          <div className={styles.quality}>
            <h2>QUALITY | SERVICE | RELIABILITY</h2>
          </div>
          <div className={styles.tc1}>
            <h1 style={{ color: "#6D3A3A" }}>TRIMURTI CATERERS</h1>
          </div>
          <div className={styles.weAreHere}>
            <p>
              We are here to serve the finest quality food and elevate your
              guests' experience. We take care of every detail, so you can focus
              on enjoying your special occasion. Leave the food-related worries to us!!
            </p>
          </div>
        </div>

        <div className={styles.whatsappHelpButton}>
          <a
            href="https://wa.me/917030308284?text=Hi%2C%20I'm%20interested%20in%20your%20catering%20services.%20Can%20you%20help%20me%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            Need Help? <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className={styles.smallscreenBg}>
        <img
          className={styles.smallImage}
          src="/Images/Image-small.png"
          alt="Background"
        />

        <div className={styles.overlayText}>
          <div className={styles.quality}>
            <h2>QUALITY | SERVICE | RELIABILITY</h2>
          </div>
          <div className={styles.tc1}>
            <h1 style={{ color: "#D19B38" }}>TRIMURTI CATERERS</h1>
          </div>
          <div className={styles.weAreHere}>
            <p>
              We are here to serve the finest quality food and elevate your
              guests' experience. We take care of every detail, so you can focus
              on enjoying your special occasion. Leave the food-related worries to us!!
            </p>
          </div>
        </div>

        <div className={styles.blurWrapper}>
          <img className={styles.blurr1} src="/Images/layerBlur1.png" alt="blur" />
          <img className={styles.blurr2} src="/Images/layerBlur2.png" alt="blur" />
          <img className={styles.blurr3} src="/Images/layerBlur3.png" alt="blur" />
          <img className={styles.blurr4} src="/Images/layerBlur4.png" alt="blur" />
        </div>

        <div className={styles.whatsappHelpButton}>
          <a
            href="https://wa.me/917030308284?text=Hi%2C%20I'm%20interested%20in%20your%20catering%20services.%20Can%20you%20help%20me%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            Need Help? <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutHero1;
