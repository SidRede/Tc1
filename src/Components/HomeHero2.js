import React from 'react';
import styles from '../Styles/HomeHero2.module.css';

const HomeHero2 = () => {
  return (
    <div className={styles.hero2}>
      <div className={styles.Img1}>
        <img
          src="/Images/Rectangle1.png"
          alt="Trimurti Caterers Service in Event, Pune"
          className={styles.rect1}
        />
        <img
          src="/Images/Rectangle2.png"
          alt="Top caterers in Pune"
          className={styles.rect1}
        />
      </div>

      <div className={styles.frameContainer}>
        <div className={styles.frame}>
          <h3>TRIMURTI CATERERS</h3>
          <p>
            Trimurti Caterers, founded in 2010, specializes in delivering exquisite culinary experiences for weddings, corporate events, and celebrations. With a commitment to quality, customized menus, and professional service, we ensure every event is memorable. Our passion for flavors and flawless execution makes us a trusted name in Pune. With years of expertise, we blend tradition with innovation to create dishes that leave a lasting impression.
          </p>
        </div>

        <div>
          <img
            src="/Images/datta.png"
            alt="Trimurti Caterers Pune"
            className={styles.datta}
          />
        </div>
      </div>

      <div className={styles.Img1}>
        <img
          src="/Images/Rectangle3.png"
          alt="Affordable wedding caterers in Pune"
          className={styles.rect1}
        />
        <img
          src="/Images/Rectangle4.png"
          alt="Catering for parties and corporate events in Pune"
          className={styles.rect1}
        />
      </div>
    </div>
  );
};

export default HomeHero2;
