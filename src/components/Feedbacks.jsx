import React from 'react';
import styles from './Feedbacks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
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

  return (
    <section id="feedbacks" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}> Feedbacks</h2>
        <p className={styles.line}></p>
        <h2 className={styles.subtitle}>O que nossos alunos falam...</h2>
        <Slider {...settings} className="mb-5">
          <div>
            <Feedback />
          </div>
          <div>
            <Feedback />
          </div>
          <div>
            <Feedback />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Feedbacks;
