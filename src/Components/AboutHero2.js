import React from 'react';
import styles from '../Styles/AboutHero2.module.css';
import Image from 'next/image';

const AboutHero2 = () => {
  return (
    <div className={styles.aboutHero2}>
      <div className={styles.experience}>
        <div className={styles.box1}>
          <h2>20+</h2>
          <h4>Years of Serving</h4>
        </div>

        <div className={styles.box1}>
          <h2>2M+</h2>
          <h4>People Fed</h4>
        </div>

        <div className={styles.box1}>
          <h2>50K+</h2>
          <h4>Clients</h4>
        </div>

        <div className={styles.box1}>
          <h2>90+%</h2>
          <h4>Repeated Clients</h4>
        </div>

        <div className={styles.box1}>
          <h2>1000+</h2>
          <h4>Dishes</h4>
        </div>
      </div>

      <div>
        <div className={styles.founderInfo}>
          <div className={styles.founderImage}>
              <Image
                src="/images/founder.png"
                alt="Founder of Trimurti Caterers"
                width={300} // Adjust based on actual image dimensions
                height={300}
              />

          </div>

          <div className={styles.founderText}>
            <h3>
              Meet our <span style={{ color: "#EE4E4E" }}>Founder</span>
            </h3>
            <h2>Sachin Deshmukh</h2>
            {/* Optional bio:
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            */}
          </div>
        </div>

        {/* 
        <div className={styles.news}>
          News Paper Cuttings
        </div> 
        */}
      </div>
    </div>
  );
};

export default AboutHero2;
