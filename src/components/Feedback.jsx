import styles from './Feedback.module.css';
import img from '../imgs/imagem.webp';
import Stars from './Stars';

const Feedback = () => {
  return (
    <div className={` ${styles.feedback}`}>
      <div className="container">
        <div className={styles.content}>
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <img className={styles.depoiment} src={img} alt="Aluno" />
            </div>
            <div className="col-md-8 mt-2">
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque nec nulla suscipit, sollicitudin mauris id,
                volutpat mi. Etiam maximus, velit non ornare tincidunt, nulla
                felis facilisis orci, quis mollis leo mi a nunc. Sed dictum est
                eu lorem bibendum, sit amet tempus er.
              </p>
              <Stars quantity={5} />
              <h2 className={styles.name}>Christian Nolan</h2>
              <p className={styles.profession}>Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
