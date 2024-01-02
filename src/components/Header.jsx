import React from 'react';
import logo from '../imgs/logo_centro.png';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const Header = ({ formHeader }) => {
  // muda a cor do Header ao dar scroll
  const [fixed, setFixed] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [botaoDesativado, setBotaoDesativado] = React.useState(false);
  const changeNavbarFixed = () => {
    if (window.scrollY >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  window.addEventListener('scroll', changeNavbarFixed);

  //fecha o header no mobile se clicar em link
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
      }
    });
  });

  //scroll suave até a section
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    const topo = section.offsetTop - 100;
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
    if (href === '#home') {
      setMenu(false);
    }
  }
  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });

  //mudar a cor do header se ele estiver com collapse
  function handleClick(event) {
    event.preventDefault();

    if (!botaoDesativado) {
      // Desativa o botão
      setBotaoDesativado(true);

      setMenu(!menu);

      // Reativa o botão após um certo período de tempo (por exemplo, 1 segundo)
      setTimeout(() => {
        setBotaoDesativado(false);
      }, 500); // 1000 milissegundos = 1 segundo
    }
  }
  return (
    <nav
      className={`navbar navbar-expand-lg ${styles.nav} fixed-top ${
        fixed || menu ? styles.navbarBg : ''
      } js-menu`}
      id="nav"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img className={`${styles.mainLogo} ms-5`} src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="collapser"
          onClick={handleClick}
          disabled={botaoDesativado}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              {formHeader ? (
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              ) : (
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              )}
            </li>
            <li className="nav-item">
              {formHeader ? (
                <Link className="nav-link" aria-current="page" to="/">
                  Quem Somos
                </Link>
              ) : (
                <a className="nav-link" aria-current="page" href="#howeare">
                  Quem Somos
                </a>
              )}
            </li>
            <li className="nav-item">
              {formHeader ? (
                <Link className="nav-link" aria-current="page" to="/">
                  Nossos Valores
                </Link>
              ) : (
                <a className="nav-link" aria-current="page" href="#values">
                  Nossos Valores
                </a>
              )}
            </li>
            <li className="nav-item">
              {formHeader ? (
                <Link className="nav-link" aria-current="page" to="/">
                  Nosso time
                </Link>
              ) : (
                <a className="nav-link" aria-current="page" href="#trainers">
                  Nosso time
                </a>
              )}
            </li>
            <li className="nav-item">
              {formHeader ? (
                <Link className="nav-link" aria-current="page" to="/">
                  Trips
                </Link>
              ) : (
                <a className="nav-link" aria-current="page" href="#trips">
                  Trips
                </a>
              )}
            </li>
          </ul>
          <ul className="nav-navbar me-auto mt-3">
            <li className="nav-item">
              <Link to="/formulario">
                <button className={`${styles.signupButton}`}>
                  Pré-Matrícula
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
