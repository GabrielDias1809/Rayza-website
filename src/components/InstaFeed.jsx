import { useEffect } from 'react';
import styles from './InstaFeed.module.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const InstaFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.setAttribute('data-use-service-core', '');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="container">
        <h2 className={styles.title}>Insearch</h2>
        <p className={styles.line}></p>
        <h2 className={styles.subtitle}>O que é o Insearch...</h2>
        <p className={styles.description}>
          O In Search, são aulas avulsas todo sábado em praias diferentes pelo
          litoral do Rio. O objetivo dessa atividade, é alavancar a evolução no
          surf, através de aulas de surf em ondas diferentes. <br /> <br /> Não
          é aluno mas tem vontade de participar? Entre em contato por
          <a
            href="https://api.whatsapp.com/send?phone=+5521981454674&text=Estou%20Interessado%20no%20Insearch"
            target="_blank"
            rel="noreferrer"
            className={styles.whatsapp}
          >
            WhatsApp
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+5521981454674&text=Estou%20Interessado%20no%20Insearch"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ color: '#40c351', marginLeft: '.5rem' }}
              size="xl"
            />
          </a>
        </p>
      </div>
      <div
        className="elfsight-app-2805d832-0dc9-4dfe-acda-20dc28f6149b overflow-hidden"
        data-elfsight-app-lazy
      ></div>
    </>
  );
};

export default InstaFeed;
