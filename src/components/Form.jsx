import React from 'react';
import styles from './Form.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './Header';

const Form = () => {
  const [dataSelecionada, setDataSelecionada] = React.useState(null);

  const handleChange = (date) => {
    setDataSelecionada(date);
  };
  return (
    <>
      <Header formHeader={true} />
      <section className={styles.section}>
        <div className="container mt-5">
          <form className="mt-5 mb-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <label
                    htmlFor="nome"
                    className={`form-label ${styles.label}`}
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                {' '}
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className={`form-label ${styles.label}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3">
                  <label
                    htmlFor="celular"
                    className={`form-label ${styles.label}`}
                  >
                    Celular
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="celular"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3">
                  <label htmlFor="cpf" className={`form-label ${styles.label}`}>
                    CPF
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cpf"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3">
                  <label
                    htmlFor="nascimento"
                    className={`form-label ${styles.label}`}
                  >
                    Celular
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="nascimento"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-5">
                <div className="mb-3">
                  <label
                    htmlFor="endereco"
                    className={`form-label ${styles.label}`}
                  >
                    Endereço
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="endereco"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-1">
                <div className="mb-3">
                  <label
                    htmlFor="numero"
                    className={`form-label ${styles.label}`}
                  >
                    Numero
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="numero"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-2">
                <div className="mb-3">
                  <label
                    htmlFor="complemento"
                    className={`form-label ${styles.label}`}
                  >
                    Complemento
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="complemento"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-2">
                <div className="mb-3">
                  <label
                    htmlFor="cidade"
                    className={`form-label ${styles.label}`}
                  >
                    Cidade
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cidade"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-2">
                <div className="mb-3">
                  <label
                    htmlFor="bairro"
                    className={`form-label ${styles.label}`}
                  >
                    Bairro
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bairro"
                    required
                  />
                </div>
              </div>

              <button type="submit" className={styles.buttonForm}>
                Enviar inscrição
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
