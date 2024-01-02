// Trips.js
import styles from './Trips.module.css';
import trip1 from '../imgs/trip1.webp';

const Trips = () => {
  return (
    <section id="trips" className={`p-5 ${styles.section}`}>
      <div className={`container ${styles.valuesContainer}`}>
        <h2 className={styles.sectionTitle}>Próximas Trips</h2>
        <p className={` mb-5 ${styles.line}`}></p>

        <div
          className={`row d-flex justify-content-center ${styles.cardContainer}`}
        >
          <div
            className={`col-md-3 shadow p-3 mb-5 bg-white rounded mx-3 ${styles.card}`}
          >
            <img src={trip1} alt="" className={styles.imageCard} />
            <div className="d-flex justify-content-center mt-4">
              <h1 className={styles.values}>Lorem ipsum dolor</h1>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in pulvinar nulla. Donec maximus, sem a dictum ultrices, est
                orci facilisis dui, ac aliquet lorem ante quis orci.
              </p>
            </div>
            <a
              className={styles.buyLink}
              target="_blank"
              rel="noreferrer"
              href={`https://api.whatsapp.com/send?phone=+5521969068241&text=Estou%20Interessado%20na%20Trip%20Lorem%20Ipsum%20Dolor`}
            >
              <button className={styles.signUpButton}>Compre Agora!</button>
            </a>
          </div>
          <div
            className={`col-md-3 shadow p-3 mb-5 bg-white rounded mx-3 ${styles.card}`}
          >
            <img src={trip1} alt="" className={styles.imageCard} />
            <div className="d-flex justify-content-center mt-4">
              <h1 className={styles.values}>Lorem ipsum dolor</h1>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in pulvinar nulla. Donec maximus, sem a dictum ultrices, est
                orci facilisis dui, ac aliquet lorem ante quis orci.
              </p>
            </div>
            <a
              className={styles.buyLink}
              target="_blank"
              rel="noreferrer"
              href={`https://api.whatsapp.com/send?phone=+5521969068241&text=Estou%20Interessado%20na%20Trip%20Lorem%20Ipsum%20Dolor`}
            >
              <button className={styles.signUpButton}>Compre Agora!</button>
            </a>
          </div>
          <div
            className={`col-md-3 shadow p-3 mb-5 bg-white rounded mx-3 ${styles.card}`}
          >
            <img src={trip1} alt="" className={styles.imageCard} />
            <div className="d-flex justify-content-center mt-4">
              <h1 className={styles.values}>Lorem ipsum dolor</h1>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in pulvinar nulla. Donec maximus, sem a dictum ultrices, est
                orci facilisis dui, ac aliquet lorem ante quis orci.
              </p>
            </div>
            <a
              className={styles.buyLink}
              target="_blank"
              rel="noreferrer"
              href={`https://api.whatsapp.com/send?phone=+5521969068241&text=Estou%20Interessado%20na%20Trip%20Lorem%20Ipsum%20Dolor`}
            >
              <button className={styles.signUpButton}>Compre Agora!</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trips;
