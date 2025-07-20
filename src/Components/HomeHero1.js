import React from 'react';
import styles from '../Styles/HomeHero1.module.css';
import Image from 'next/image';

const HomeHero1 = () => {
  return (
    <>
      <section className={styles.hero}>
        <Image
          className={styles.fire}
          src="/images/blackFire.png"
          alt="Fire decoration"
          width={100}
          height={100}
        />

        <div className={styles.MainText}>
          <h3 className={styles.discover}>Discover</h3>
          <h1 className={styles.tc}>TRIMURTI CATERERS</h1>
          <h4 className={styles.tagLine}>
            CELEBRATE LIFE . . LIVE FOR TODAY . . ENJOY THE MOMENY . . !!!
          </h4>

          <Image
            className={styles.lines}
            src="/images/Group84.png"
            alt="Separator lines"
            width={500}
            height={40}
          />

          <p className={styles.address}>
            Behind Indraprastha lawns, Near Grapes Research Center,<br />
            Loni Toll Plaza, Manjari, Pune - 412307.
          </p>
        </div>

        <Image
          className={styles.chineseDish}
          src="/images/plate1.jpg"
          alt="Chinese dish for a catering Event"
          width={500}
          height={500}
        />

        {/* <div className={styles.blurWrapper}>
          <Image
            className={styles.blurr1}
            src="/images/layerBlur1.png"
            alt="blur"
            width={362}
            height={459}
          />
         
          <Image
            className={styles.blurr3}
            src="/images/LayerBlur3.png"
            alt="blur"
            width={480}
            height={372}
          />
          <Image
            className={styles.blurr4}
            src="/images/LayerBlur4.png"
            alt="blur"
            width={403}
            height={332}
          />
        </div> */}
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
