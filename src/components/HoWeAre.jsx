import React from 'react';
import styles from './HoWeAre.module.css';
import p1 from '../imgs/howearePhoto.webp';
import p2 from '../imgs/howearePhoto_2.webp';

const HoWeAre = () => {
  return (
    <section className={styles.section} id="howeare">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className={styles.sectionTitle}>Quem Somos</h2>
            <p className={styles.line}></p>
            <p className={styles.howeare}>
              A Escola de Surf Rayza Silveira é um centro de treinamento que
              promove todos os ensinamentos relacionados ao surf. Utilizamos
              como metodologia: aulas ,eventos e viagens, além de promovermos
              inclusão social, consciência ecológica e saúde em um ambiente
              multidisciplinar, agradável e acolhedor. Atendemos dos alunos
              iniciantes, sem nenhuma experiência, até surfistas avançados que
              buscam mais evoluçã
            </p>
          </div>
          <div className="col-md-6 d-flex">
            <img src={p1} alt="" className={` ${styles.students} me-2`} />
            <img src={p2} alt="" className={`img-fluid ${styles.students}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoWeAre;
