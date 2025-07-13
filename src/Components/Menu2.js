import React from 'react';
import styles from '../Styles/Menu2.module.css';
import Image from 'next/image';

const MenuHero2 = () => {
  return (
    <div>
      <div className={styles.Img12}>
        <Image
          src="/images/Menu1.png"
          alt=""
          className={styles.menuImg}
          style={{ animationDelay: '0s' }}
          width={300}
          height={300}
        />
        <Image
          src="/images/Menu2.png"
          alt=""
          className={styles.menuImg}
          style={{ animationDelay: '0.2s' }}
          width={300}
          height={300}
        />
        <Image
          src="/images/Menu3.png"
          alt=""
          className={styles.menuImg}
          style={{ animationDelay: '0.4s' }}
          width={300}
          height={300}
        />
      </div>

      <div className={styles.Img22}>
        <Image
          src="/images/Menu4.png"
          alt=""
          className={styles.menuImg}
          width={300}
          height={300}
        />
        <Image
          src="/images/Menu5.png"
          alt=""
          className={styles.menuImg}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default MenuHero2;
