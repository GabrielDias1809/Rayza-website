import styles from './Feedbacks.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Feedback from './Feedback';

const Feedbacks = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const feedbacks = [
    {
      name: 'Fabiana Cury',
      gender: 'female',
      feedback:
        'É uma escolinha única. Além das aulas de surf especificamente, temos aulas de remada, educativos. Em Algumas dessas aulas conheci lugares lindos dos quais eu nem sabia da existência. Sem contar as viagens que a escolinha proporciona em praias paradisíacas com surf desde iniciantes a pessoas experientes. O mais importante foi que conheci pessoas que vou levar pra vida.',
      stars: 5,
    },
    {
      name: 'Fernanda Moura',
      gender: 'female',
      feedback:
        'A MELHOR escola de surf de Niterói . As professoras e os professores são muito gente boa e suas aulas são a perfeita combinação entre técnica, prática, diversão e treinamento. A Ray é uma professora honesta que cuida bem dos seus alunos e realmente quer ver o progresso deles no surf. No mar, todos os instrutores dão MUITA confiança e segurança.Escolinha maravilhosa!!!',
      stars: 5,
    },
    {
      name: 'Johab Pacheco',
      gender: 'male',
      feedback:
        'Sem palavras para definir a escola de surf da Rayza, você que está lendo isso , se estiver com alguma dúvida a respeito da qualidade das aulas , já aviso logo, não fique. Além de ser uma ótima profissional, a Rayza é um ser humano incrível,  muito gente boa mesmo, pode confiar. E afirmo novamente, não tem com o que se preocupar com a competência e qualidade dos profissionais,  vá sem medo de ser feliz.',
      stars: 5,
    },
  ];

  return (
    <section id="feedbacks" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}> Feedbacks</h2>
        <p className={styles.line}></p>
        <h2 className={styles.subtitle}>O que nossos alunos falam...</h2>
        <Slider {...settings} className="mb-5">
          {feedbacks.map((fd) => (
            <div key={fd.name}>
              <Feedback
                src={fd.gender}
                name={fd.name}
                feedback={fd.feedback}
                stars={fd.stars}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Feedbacks;
