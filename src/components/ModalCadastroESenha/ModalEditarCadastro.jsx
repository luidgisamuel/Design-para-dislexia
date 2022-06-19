import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import BotaoConfirmar from '../BotaoConfirmar/BotaoConfirmar';
import BotaoCancelar from '../BotaoCancelar/BotaoCancelar';
import './ModalCadastroESenha.css'
const ModalEditarCadastro = props => {

  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [smallCpf, setSmallCpf] = useState('');
  const [smallNome, setSmallNome] = useState('');
  const [smallEmail, setSmallEmail] = useState('');
  const [classeCpf, setClasseCpf] = useState('modal__field-input-icons-container');
  const [classeNome, setClasseNome] = useState('modal__field-input-icons-container');
  const [classeEmail, setClasseEmail] = useState('modal__field-input-icons-container');
  const [foiConfirmado, setFoiConfirmado] = useState(false);

  /*esta função verifica se os inputs já foram verificados*/
  useEffect(() => {
    if (foiConfirmado ) {
      checkCpf();
      checkNome();
      checkEmail();
    }
  }); 

  /*esta função verifica se o  cpf esta preenchido, e se está preenchido certo*/
  function checkCpf() {
    if (cpf === "") {
      setClasseCpf("modal__field-input-icons-container error")
      setSmallCpf("Preencha o CPF");
    } else if (!isCpf(cpf)) {
      setClasseCpf("modal__field-input-icons-container error")
      setSmallCpf("CPF inválido");
    } else {
      setClasseCpf("modal__field-input-icons-container success")
    }
  }

  /*esta função verifica se o  nome esta preenchido, e se está preenchido certo*/
  function checkNome() {
    if (nome === "") {
      setClasseNome("modal__field-input-icons-container error")
      setSmallNome("Preencha o nome");
    } else if (!isNome(nome)) {
      setClasseNome("modal__field-input-icons-container error")
      setSmallNome("nome inválido");
    } else {
      setClasseNome("modal__field-input-icons-container success")
    }
  }

   /*esta função verifica se o  email esta preenchido, e se está preenchido certo*/
  function checkEmail() {
    if (email === "") {
      setClasseEmail("modal__field-input-icons-container error")
      setSmallEmail("Preencha o e-mail");
    } else if (!isEmail(email)) {
      setClasseEmail("modal__field-input-icons-container error")
      setSmallEmail("E-mail inválido");
    } else {
      setClasseEmail("modal__field-input-icons-container success")
    }
  }
  /*esta função verifica os inputs do modal*/
  function onClickConfirmar(e) {
    e.preventDefault();
    setFoiConfirmado(true);
    checkCpf();
    checkNome();
    checkEmail();
  }

  /*esta função valida o cpf*/
  function isCpf(cpf) {
    return (/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf))
  }
  /*esta função valida o nome*/
  function isNome(nome) {
    return (/^[a-z ,.'-]+$/i.test(nome));
  }
  /*esta função valida o email*/
  function isEmail(email) {
    return (/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(email));
  }

  return (

    <div className="modal__overlay">
      <div className="modal__container">
        <h2 className="modal__title">{props.modalTitulo}</h2>
        <h1 className="modal__required-field-title">*Campos Obrigatórios</h1>
        <div className="modal__field">
          <label className="modal__field-label" htmlFor="cpf" >CPF<span className="modal__required-field"> *</span></label>
          <div className={classeCpf}>
            <InputMask mask="999.999.999-99" className="modal__field-input " id="cpf" type="text" placeholder="XXX.XXX.XXX-XX" onChange={e => setCpf(e.target.value)} />
            <i className="modal__field-input-icons fas fa-check-circle"></i>
            <i className="modal__field-input-icons fas fa-exclamation-circle"></i>
            <small className="modal__field-small ">{smallCpf}</small>
          </div>
        </div>
        <div className="modal__field">
          <label className="modal__field-label" htmlFor="nome">NOME<span className="modal__required-field"> *</span></label>
          <div className={classeNome}>
            <input className="modal__field-input " id="nome" type="text" onChange={e => setNome(e.target.value)} />
            <i className="modal__field-input-icons fas fa-check-circle"></i>
            <i className="modal__field-input-icons fas fa-exclamation-circle "></i>
            <small className="modal__field-small">{smallNome}</small>
          </div>
        </div>
        <div className="modal__field">
          <label className="modal__field-label" htmlFor="email" >E-MAIL<span className="modal__required-field"> *</span></label>
          <div className={classeEmail}>
            <input className="modal__field-input " id="email" type="email" placeholder="usuario@provedor.com" onChange={e => setEmail(e.target.value)} />
            <i className="modal__field-input-icons fas fa-check-circle"></i>
            <i className="modal__field-input-icons fas fa-exclamation-circle"></i>
            <small className="modal__field-small">{smallEmail}</small>
          </div>
        </div>
        <div className="modal__btn-group">
          <div className="modal__botao-confirmar">
            <BotaoConfirmar onClick={e => onClickConfirmar(e)} titulo="CONFIRMAR" ></BotaoConfirmar>
          </div>
          <BotaoCancelar onClick={props.onClose} titulo="CANCELAR"></BotaoCancelar>
        </div>
      </div>
    </div>
  )
}

export default ModalEditarCadastro;