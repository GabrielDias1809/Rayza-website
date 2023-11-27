import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../imgs/logo_centro.png';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <section className={styles.section}>
        <div className="container p-5 ">
          <div className="row">
            <div className="col-md-3">
              <img className={`${styles.mainLogo}`} src={logo} alt="logo" />
              <p className={`${styles.information}`}>seuemail@gmail.com</p>
              <p className={`${styles.information}`}>21 96906-8241</p>
              <p className=" mt-4">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ color: '#949fb5', marginLeft: '.5rem' }}
                    size="xl"
                  />
                </a>

                <a href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: '#949fb5', marginLeft: '.5rem' }}
                    size="xl"
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: '#949fb5', marginLeft: '.5rem' }}
                    size="xl"
                  />
                </a>
              </p>
            </div>
            <div className="col-md-3 mt-5">
              <h4 className={styles.subtitle}>Navegação</h4>

              <p className={styles.information}>
                <a href="#home" className="nav-link">
                  Home
                </a>
              </p>

              <p className={styles.information}>
                <a href="#howeare" className="nav-link">
                  Quem Somos
                </a>
              </p>

              <p className={styles.information}>
                <a href="#values" className="nav-link">
                  Nosso Valores
                </a>
              </p>

              <p className={styles.information}>
                <a href="#trainers" className="nav-link">
                  Nosso Time
                </a>
              </p>
              <p className={styles.information}>
                <a href="#trips" className="nav-link">
                  Trips
                </a>
              </p>
              <p className={styles.information}>
                <Link className="nav-link" to="system">
                  System
                </Link>
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <h4 className={styles.subtitle}>Onde nos encontrar</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5123538739513!2d-43.04597502450164!3d-22.968179640068435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99864b8050a46f%3A0x775c4dadfe0fb533!2sEscola%20de%20Surf%20Rayza%20Silveira!5e0!3m2!1spt-BR!2sbr!4v1700005661090!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '30px', marginTop: '3vh' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footer}></section>
    </>
  );
};

export default Footer;
