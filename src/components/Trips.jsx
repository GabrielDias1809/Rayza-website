// Trips.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Trips.module.css';
import trip1 from '../imgs/trip1.png';
import trip2 from '../imgs/trip2.png';

const Trips = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <section id="trips" className={`p-5 ${styles.section}`}>
      <div className={`container ${styles.valuesContainer}`}>
        <h2 className={styles.sectionTitle}>Próximas Trips</h2>
        <p className={` mb-5 ${styles.line}`}></p>

        <div
          className={`row d-flex justify-content-center ${styles.cardContainer}`}
        >
          {data?.map((c) => (
            <div
              key={c._id}
              className={`col-md-3 shadow p-3 mb-5 bg-white rounded mx-3 ${styles.card}`}
            >
              <img src={trip1} alt="" className={styles.imageCard} />
              <div className="d-flex justify-content-center mt-4">
                <h1 className={styles.values}>{c.title}</h1>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <p className={styles.description}>{c.content}</p>
              </div>
              <button className={styles.signUpButton}>Compre Agora!</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trips;
