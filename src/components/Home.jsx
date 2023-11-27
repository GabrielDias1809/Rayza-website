import React from 'react';
import styles from './Home.module.css';
import Header from './Header';

const Home = () => {
  return (
    <>
      <section id="home" className={styles.section}>
        <div className="container d-flex justify-content-center align-items-end">
          <button className={styles.signupButton}>Inscreva-se agora</button>
        </div>
      </section>
    </>
  );
};

export default Home;
