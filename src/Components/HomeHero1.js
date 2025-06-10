import React from 'react';
import styles from '../Styles/HomeHero1.module.css';

const HomeHero1 = () => {
  return (
    <>
      <section className={styles.hero}>
        <img className={styles.fire} src="/Images/blackFire.png" alt="Fire decoration" />

        <div className={styles.MainText}>
          <h3 className={styles.discover}>Discover</h3>
          <h1 className={styles.tc}>TRIMURTI CATERERS</h1>
          <h4 className={styles.tagLine}>CELEBRATE LIFE . . LIVE FOR TODAY . . ENJOY THE MOMENY . . !!!</h4>
          <img className={styles.lines} src="/Images/Group84.png" alt="Separator lines" />
          <p className={styles.address}>
            Behind Indraprastha lawns, Near Grapes Research Center,<br />
            Loni Toll Plaza, Manjari, Pune - 412307.
          </p>
        </div>

        <img className={styles.chineseDish} src="/Images/chineseDish.png" alt="Chinese dish for a catering Event" />

        <div className={styles.blurWrapper}>
          <img className={styles.blurr1} src="/Images/layerBlur1.png" alt="blur" />
          <img className={styles.blurr2} src="/Images/LayerBlur2.png" alt="blur" />
          <img className={styles.blurr3} src="/Images/LayerBlur3.png" alt="blur" />
          <img className={styles.blurr4} src="/Images/LayerBlur4.png" alt="blur" />
        </div>
      </section>

      <div className={styles.whatsappHelpButton}>
        <a
          href="https://wa.me/917030308284?text=Hi%2C%20I'm%20interested%20in%20your%20catering%20services.%20Can%20you%20help%20me%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          Need Help? <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </>
  );
};

export default HomeHero1;
