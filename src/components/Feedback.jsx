/* eslint-disable react/prop-types */
import styles from './Feedback.module.css';
import imgMale from '../imgs/homem.jpg';
import imgFemale from '../imgs/mulher.jpg';
import Stars from './Stars';

const Feedback = ({ src, name, feedback, stars }) => {
  return (
    <>
      <div className={` ${styles.feedback}`}>
        <div className="container">
          <div className={styles.content}>
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center">
                <img
                  className={styles.depoiment}
                  src={src === 'male' ? imgMale : imgFemale}
                  alt="Aluno"
                />
              </div>
              <div className="col-md-8 mt-2">
                <p className={styles.description}>{feedback}</p>
                <Stars quantity={stars} />
                <h2 className={styles.name}>{name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
