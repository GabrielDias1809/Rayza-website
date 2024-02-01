import styles from './Form.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './Header';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function validarCPF(cpf) {
  // Função para validar os dígitos verificadores do CPF
  function validarDigitos(cpf) {
    const digitos = cpf.slice(0, -2);
    const calculo =
      digitos
        .split('')
        .reduce(
          (acc, digit, index) => acc + parseInt(digit) * (10 - index),
          0,
        ) % 11;

    const digitoVerificador1 = calculo < 2 ? 0 : 11 - calculo;

    const novoCalculo =
      (digitos + digitoVerificador1)
        .split('')
        .reduce(
          (acc, digit, index) => acc + parseInt(digit) * (11 - index),
          0,
        ) % 11;

    const digitoVerificador2 = novoCalculo < 2 ? 0 : 11 - novoCalculo;

    return `${digitoVerificador1}${digitoVerificador2}`;
  }

  // Função para formatar o CPF removendo caracteres não numéricos
  function formatarCPF(cpf) {
    return cpf.replace(/\D/g, '');
  }

  // Lógica principal para validar o CPF
  const cpfFormatado = formatarCPF(cpf);

  if (!/^\d{11}$/.test(cpfFormatado)) {
    return false; // O CPF não tem o formato esperado
  }

  const digitosVerificadores = validarDigitos(cpfFormatado);

  return cpfFormatado.endsWith(digitosVerificadores);
}

const schema = yup.object({
  nome: yup.string().required('Campo obrigatório').max(100),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  celular: yup
    .string()
    .required('Campo obrigatório')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/,
      'Formato de telefone inválido',
    ),
  cpf: yup
    .string()
    .required('Campo obrigatório')
    .test('cpf-valido', 'CPF inválido', validarCPF),
  nascimento: yup.string().required('Campo obrigatório'),
  endereco: yup
    .string()
    .required('Campo obrigatório')
    .max(50, 'Máximo de 50 caracteres'),
  numero: yup.string().max(5, 'Máximo de 5 dígitos'),
  complemento: yup.string().max(50, 'Máximo de 50 caracteres'),
  cidade: yup
    .string()
    .required('Campo obrigatório')
    .max(50, 'Máximo de 50 caracteres'),
  bairro: yup
    .string()
    .required('Campo obrigatório')
    .max(50, 'Máximo de 50 caracteres'),
  termos: yup.bool().oneOf([true], 'Você deve concordar com os termos '),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors.nome?.message);
  return (
    <>
      <Header formHeader={true} />
      <section className={styles.section}>
        <div className="container mt-5">
          <form className="mt-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
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
                    className={`form-control ${
                      errors.nome ? 'is-invalid' : ''
                    }`}
                    id="nome"
                    aria-describedby="emailHelp"
                    required
                    {...register('nome')}
                  />
                  <span className={styles.errors}>{errors.nome?.message}</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className={`form-label ${styles.label}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? 'is-invalid' : ''
                    }`}
                    id="email"
                    required
                    {...register('email')}
                  />
                  <span className={styles.errors}>{errors.email?.message}</span>
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
                    className={`form-control ${
                      errors.celular ? 'is-invalid' : ''
                    }`}
                    id="celular"
                    required
                    placeholder="( _ _ ) _ _ _ _ _-_ _ _ _"
                    {...register('celular')}
                  />
                  <span className={styles.errors}>
                    {errors.celular?.message}
                  </span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3">
                  <label htmlFor="cpf" className={`form-label ${styles.label}`}>
                    CPF
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.cpf ? 'is-invalid' : ''}`}
                    id="cpf"
                    required
                    {...register('cpf')}
                  />
                  <span className={styles.errors}>{errors.cpf?.message}</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3">
                  <label
                    htmlFor="nascimento"
                    className={`form-label ${styles.label}`}
                  >
                    Nascimento
                  </label>
                  <input
                    type="date"
                    className={`form-control ${
                      errors.nascimento ? 'is-invalid' : ''
                    }`}
                    id="nascimento"
                    required
                    {...register('nascimento')}
                  />
                  <span className={styles.errors}>
                    {errors.nascimento?.message}
                  </span>
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
                    className={`form-control ${
                      errors.endereco ? 'is-invalid' : ''
                    }`}
                    id="endereco"
                    required
                    {...register('endereco')}
                  />
                  <span className={styles.errors}>
                    {errors.endereco?.message}
                  </span>
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
                    className={`form-control ${
                      errors.numero ? 'is-invalid' : ''
                    }`}
                    id="numero"
                    {...register('numero')}
                  />
                  <span className={styles.errors}>
                    {errors.numero?.message}
                  </span>
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
                    className={`form-control ${
                      errors.complemento ? 'is-invalid' : ''
                    }`}
                    id="complemento"
                    {...register('complemento')}
                  />
                  <span className={styles.errors}>
                    {errors.complemento?.message}
                  </span>
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
                    className={`form-control ${
                      errors.cidade ? 'is-invalid' : ''
                    }`}
                    id="cidade"
                    required
                    {...register('cidade')}
                  />
                  <span className={styles.errors}>
                    {errors.cidade?.message}
                  </span>
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
                    className={`form-control ${
                      errors.bairro ? 'is-invalid' : ''
                    }`}
                    id="bairro"
                    required
                    {...register('bairro')}
                  />
                  <span className={styles.errors}>
                    {errors.bairro?.message}
                  </span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-check">
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Eu li e concordo com os{' '}
                    <a
                      className={styles.termo}
                      data-bs-toggle="modal"
                      data-bs-target="#modal"
                    >
                      termos de matrícula
                    </a>
                  </label>
                  <input
                    className={`form-check-input ${
                      errors.termos ? 'is-invalid' : 'is-valid'
                    }`}
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    {...register('termos')}
                  />
                  <span className={styles.errors}>
                    {errors.termos?.message}
                  </span>
                  <div className="modal" id="modal" tabIndex="-1">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Termos de matrícula</h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Para os devidos efeitos e sob sua inteira
                            responsabilidade <b>DECLARO</b>: Não possuir
                            qualquer contraindicação médica para a prática das
                            atividades físicas a desenvolver com frequência na{' '}
                            <b>Escola de Surf Rayza Silveira</b>. Estar apto a
                            praticar o Surf, onde sou inteiramente responsável
                            pela minha integridade física no que diz respeito à
                            minha aptidão física para a prática desta
                            modalidade, isentando os Professores, Instrutores e
                            Proprietários deste estabelecimento de toda e
                            qualquer responsabilidade por acidentes que venham a
                            ocorrer durante as aulas de Surf. Por fim, declaro
                            estar ciente que{' '}
                            <b>
                              é de minha inteira responsabilidade minha aptidão
                              física atual e futura!
                            </b>
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className={styles.buttonForm}
                onClick={() => handleSubmit(onSubmit)()}
              >
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
