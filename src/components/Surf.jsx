import React from 'react';
import styles from './Surf.module.css';
import { Link } from 'react-router-dom';

const Surf = () => {
  return (
    <section id="surf" className={styles.section}>
      <div className="d-flex justify-content-center">
        <h1 className={styles.title}>Sempre Sonhou em Surfar?</h1>
      </div>
      <div className="d-flex justify-content-center">
        <p className={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/formulario" style={{ textDecoration: 'none' }}>
          <button className={styles.signUpButton}>Inscreva-se</button>
        </Link>
      </div>
    </section>
  );
};

export default Surf;
