import React from 'react';
import styles from '../Styles/HomeHero2.module.css';
import Image from 'next/image';

const HomeHero2 = () => {
  return (
    <div className={styles.hero2}>
      <div className={styles.Img1}>
        <Image
          src="/Images/Rectangle1.png"
          alt="Trimurti Caterers Service in Event, Pune"
          className={styles.rect1}
          width={300}
          height={300}
        />
        <Image
          src="/Images/Rectangle2.png"
          alt="Top caterers in Pune"
          className={styles.rect1}
          width={300}
          height={300}
        />
      </div>

      <div className={styles.frameContainer}>
        <div className={styles.frame}>
          <h3>TRIMURTI CATERERS</h3>
          <p>
           Trimurti Caterers, founded in 2005, is among the <b>top caterers in Pune</b>, offering professional catering services and exquisite culinary experiences for weddings, corporate events, and celebrations. Recognized as one of the <b> best caterers in Pune and Hadapsar</b>, we provide tailored catering services in Pune and PCMC. From wedding, birthday parties to corporate events catering, our passion for flavor and flawless execution makes us a trusted name . For the best in caterering Pune, choose <b> Trimurti !!!</b> </p>
        </div>

        <div>
          <Image
            src="/Images/datta.png"
            alt="Trimurti Caterers Pune"
            className={styles.datta}
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className={styles.Img1}>
        <Image
          src="/Images/Rectangle3.png"
          alt="Affordable wedding caterers in Pune"
          className={styles.rect1}
          width={300}
          height={300}
        />
        <Image
          src="/Images/Rectangle4.png"
          alt="Catering for parties and corporate events in Pune"
          className={styles.rect1}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default HomeHero2;
