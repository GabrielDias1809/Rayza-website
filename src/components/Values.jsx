import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import styles from './Values.module.css';

const Values = () => {
  return (
    <section className={styles.section} id="values">
      <div className={`container ${styles.valuesContainer}`}>
        <h2 className={styles.sectionTitle}>Nossos Valores</h2>
        <p className={` mb-5 ${styles.line}`}></p>

        <div
          className={`row d-flex justify-content-center ${styles.cardContainer}`}
        >
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`col-md-3 shadow p-3 mb-5 bg-white rounded mx-3 ${styles.card}`}
            >
              <div
                className={`d-flex justify-content-center mt-4 ${styles.iconContainer}`}
              >
                <FontAwesomeIcon
                  icon={faSeedling}
                  size="2xl"
                  style={{
                    border: '1px solid black',
                    borderRadius: '50%',
                    padding: '20px',
                  }}
                />
              </div>
              <div className="d-flex justify-content-center mt-4">
                <h1 className={styles.values}>Respeito</h1>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <p className={styles.description}>
                  Promover a conscientização ambiental e o respeito pelos
                  oceanos e praias. Isso pode incluir práticas sustentáveis,
                  como a não poluição da água, o descarte adequado do lixo e a
                  preservação da vida marinha.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
