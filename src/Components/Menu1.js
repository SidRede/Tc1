import React from 'react';
import styles from '../Styles/Menu1.module.css';
import Image from 'next/image';

const Menu1 = () => {
  return (
    <>
      <div className={styles.menuHero}>
        <div className={styles.marathi}>
          <p>
            वदनी कवळ घेता नाम घ्या श्री हरीचे, <br />
            सहज हवन होते नाम घेता फुकाचे.<br />
            जीवन करी जीवित्वा, अन्न हे पूर्ण ब्रह्म,<br />
            उदर भरण मोहे जाणिजे, यज्ञ कर्म
          </p>
        </div>

        <div className={styles.thali}>
          <Image
            src="/images/thali.png"
            alt="Thali"
            className={styles.thali}
            width={400}
            height={400}
          />
        </div>

        <div className={styles.ellipse}>
          <Image
            src="/images/ellipse.png"
            alt="ellipse"
            className={styles.ellipse}
            width={300}
            height={300}
          />
        </div>

        <div className={styles.ellipse1}>
          <Image
            src="/images/ellipse1.png"
            alt="ellipse1"
            className={styles.ellipse1}
            width={250}
            height={250}
          />
        </div>

        <div className={styles.ellipse2}>
          <Image
            src="/images/ellipse1.png"
            alt="ellipse2"
            className={styles.ellipse2}
            width={250}
            height={250}
          />
        </div>
      </div>
    </>
  );
};

export default Menu1;
