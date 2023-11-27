import React from 'react';
import styles from './Trainers.module.css';
import trainer1 from '../imgs/team1.png';
import trainer2 from '../imgs/team2.png';
import trainer3 from '../imgs/team3.png';

const Trainers = () => {
  return (
    <section id="trainers" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Nossos Treinadores</h2>
        <p className={` mb-5 ${styles.line}`}></p>
        <div className="row ">
          <div className="col-md-4 mb-5 d-flex justify-content-center">
            <img src={trainer1} alt="" className={styles.trainers} />
          </div>
          <div className="col-md-4 mb-5 d-flex justify-content-center">
            <img src={trainer2} alt="" className={styles.trainers} />
          </div>
          <div className="col-md-4 mb-5 d-flex justify-content-center">
            <img src={trainer3} alt="" className={styles.trainers} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
