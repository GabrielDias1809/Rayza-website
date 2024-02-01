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
          Utilizamos como metodologia: aulas ,eventos e viagens, além de
          promovermos inclusão social, consciência ecológica e saúde em um
          ambiente multidisciplinar, agradável e acolhedor.
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
