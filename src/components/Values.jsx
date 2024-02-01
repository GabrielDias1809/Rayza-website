import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import styles from './Values.module.css';

const Values = () => {
  const values = [
    {
      value: 'Respeito pela natureza',
      description:
        'Ensinando o respeito pelos oceanos, praias e ecossistemas marinhos. Isso envolve não apenas a limpeza das praias, mas também a conscientização sobre a preservação do ambiente marinho.',
    },
    {
      value: 'Empatia e apoio',
      description:
        'Estar atento às necessidades e dificuldades dos alunos novos e inexperientes, fornecendo suporte e orientação para que todos se sintam incluídos e encorajados a progredir no surf.',
    },
    {
      value: 'Autoconfiança e superação',
      description:
        'Incentivar os alunos a superarem seus limites pessoais, ajudando-os a desenvolver a confiança em suas habilidades no surf e na vida em geral. Isso pode ser feito através de atividades desafiadoras e celebração das conquistas individuais',
    },
    {
      value: 'Segurança',
      description:
        'Enfatizar a importância da segurança no mar, promovendo aulas de primeiros socorros, técnicas de salvamento e consciência sobre as condições do oceano. Isso ajuda os alunos a entenderem os riscos associados ao surf e como mitigá-los.',
    },
  ];
  return (
    <section className={styles.section} id="values">
      <div className={`container ${styles.valuesContainer}`}>
        <h2 className={styles.sectionTitle}>Nossos Valores</h2>
        <p className={` mb-5 ${styles.line}`}></p>

        <div
          className={`row d-flex justify-content-center ${styles.cardContainer}`}
        >
          {values.map((index) => (
            <div
              key={index.value}
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
                <h1 className={styles.values}>{index.value}</h1>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <p className={styles.description}>{index.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
