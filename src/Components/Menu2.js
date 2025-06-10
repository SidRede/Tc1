import React from 'react';
import styles from '../Styles/Menu2.module.css';

const MenuHero2 = () => {
  return (
    <div>
      <div className={styles.Img12}>
        <img
          src="/Images/Menu1.png"
          alt=""
          className={styles.menuImg}
          style={{ animationDelay: '0s' }}
        />
        <img
          src="/Images/Menu2.png"
          alt=""
          className={styles.menuImg}
          style={{ animationDelay: '0.2s' }}
        />
        <img
          src="/Images/Menu3.png"
          alt=""
          className={styles.menuImg}
          style={{ animationDelay: '0.4s' }}
        />
      </div>

      <div className={styles.Img22}>
        <img src="/Images/Menu4.png" alt="" className={styles.menuImg} />
        <img src="/Images/Menu5.png" alt="" className={styles.menuImg} />
      </div>
    </div>
  );
};

export default MenuHero2;
