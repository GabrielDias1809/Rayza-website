import React from 'react';
import styles from './Home.module.css';
import Header from './Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section id="home" className={styles.section}>
        <div className="container d-flex justify-content-center align-items-end">
          <Link to="/formulario">
            <button className={styles.signupButton}>Inscreva-se agora</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
