import React from 'react';
import styles from '../Styles/Menu1.module.css'; // Adjust path if needed

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
        <img src="/Images/thali.png" alt="Thali" />
      </div>
      <div className={styles.ellipse}>
        <img src="/Images/ellipse.png" alt="ellipse" />
      </div>
      <div className={styles.ellipse1}>
        <img src="/Images/ellipse1.png" alt="ellipse1" />
      </div>
      <div className={styles.ellipse2}>
        <img src="/Images/ellipse1.png" alt="ellipse2" />
      </div>
    </div>
    </>
  );
};

export default Menu1;
