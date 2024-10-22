import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import React from 'react';

export default function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <div className="row">
          <h1 style={{ paddingLeft: 20 }}>Funded By</h1>
        </div>
        <div className="row">
          <div className={styles.col_sides} />
          <div className={styles.col_middle}>
            <img src='/img/bmbf_logo.png' className={styles.sponsorImage} alt="German Federal Ministry of Education and Research" />
          </div>
          <div className={styles.col_middle}>
            <img src='/img/eu_logo.jpg' className={styles.sponsorImage} alt="European Union" />
          </div>
          <div className={styles.col_sides} />
        </div>
      </div>
    </section>
  );
}
