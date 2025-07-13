import React from 'react';
import Image from 'next/image';

import styles from '../Styles/AboutHero1.module.css'; // ✅ Already using CSS Module

const AboutHero1 = () => {
  return (
    <>
      <div className={styles.fullscreenBg}>
        <Image
        width={1024}
        height={297}
          className={styles.largeImage}
          src="/Images/image-large.jpg"
          alt="Background"
        />

        <div className={styles.overlayText}>
          
          <div className={styles.tc1}>
            <h1 style={{ color: "#6D3A3A" }}>TRIMURTI CATERERS</h1>
          </div>
          <div className={styles.weAreHere}>
            <p>
              We are here to serve the finest quality food and elevate your
              guest&#39; experience. We take care of every detail, so you can focus
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
        <Image
          className={styles.smallImage}
          src="/Images/Image-small.png"
          alt="Background"
          width={300} // adjust based on actual size
          height={200} // adjust based on actual size
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
              guests&#39; experience. We take care of every detail, so you can focus
              on enjoying your special occasion. Leave the food-related worries to us!!
            </p>
          </div>
        </div>

        <div className={styles.blurWrapper}>
         <div className={styles.blurWrapper}>
          <Image className={styles.blurr1} src="/Images/layerBlur1.png" alt="blur" width={362} height={459} />
          <Image className={styles.blurr2} src="/Images/LayerBlur2.png" alt="blur" width={242} height={276} />
          <Image className={styles.blurr3} src="/Images/LayerBlur3.png" alt="blur" width={480} height={372} />
          <Image className={styles.blurr4} src="/Images/LayerBlur4.png" alt="blur" width={403} height={332} />
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
    </>
  );
};

export default AboutHero1;
