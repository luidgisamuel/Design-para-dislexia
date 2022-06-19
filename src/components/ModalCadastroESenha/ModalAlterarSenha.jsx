import { useEffect, useState } from 'react';
import './ModalCadastroESenha.css'
import icone_senha_visivel from './icone_senha_visivel.svg';
import icone_senha_nao_visivel from './icone_senha_nao_visivel.svg';
import BotaoConfirmar from '../BotaoConfirmar/BotaoConfirmar';
import BotaoCancelar from '../BotaoCancelar/BotaoCancelar';

const ModalAlterarSenha = props => {

  const [mostrarSenhaAtual, setMostrarSenhaAtual] = useState("password");
  const [mostrarNovaSenha, setMostrarNovaSenha] = useState("password");
  const [mostrarConfirmarNovaSenha, setMostrarConfirmarNovaSenha] = useState("password");
  const [iconeSenhaAtual, setIconeSenhaAtual] = useState(icone_senha_nao_visivel);
  const [iconeNovaSenha, setIconeNovaSenha] = useState(icone_senha_nao_visivel);
  const [iconeConfirmarNovaSenha, setIconeConfirmarNovaSenha] = useState(icone_senha_nao_visivel);
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('');
  const [smallSenhaAtual, setSmallSenhaAtual] = useState('');
  const [smallNovaSenha, setSmallNovaSenha] = useState('');
  const [smallConfirmarNovaSenha, setSmallConfirmarNovaSenha] = useState('');
  const [classeSenhaAtual, setClasseSenhaAtual] = useState('modal__field-input-icons-container');
  const [classeNovaSenha, setClasseNovaSenha] = useState('modal__field-input-icons-container');
  const [classeConfirmarNovaSenha, setClasseConfirmarNovaSenha] = useState('modal__field-input-icons-container');
  const [foiConfirmado, setFoiConfirmado] = useState(false);
  /*esta função  altera o icone da senha, do input "senha atual", pra ver se a senha está ou não visível */
  function alteraIconeSenhaAtual() {
    if (mostrarSenhaAtual === "password") {
      setMostrarSenhaAtual("text")
      setIconeSenhaAtual(icone_senha_visivel)
    } else {
      setMostrarSenhaAtual("password")
      setIconeSenhaAtual(icone_senha_nao_visivel)
    }
  }
  /*esta função  altera o icone da senha, do input "nova senha", pra ver se a senha está ou não visível */
  function AlterarIconeNovaSenha() {
    if (mostrarNovaSenha === "password") {
      setMostrarNovaSenha("text")
      setIconeNovaSenha(icone_senha_visivel)
    } else {
      setMostrarNovaSenha("password")
      setIconeNovaSenha(icone_senha_nao_visivel)
    }
  }
  /*esta função  altera o icone da senha, do input "confirmar nova senha", pra ver se a senha está ou não visível */
  function AlterarIconeConfirmarNovaSenha() {
    if (mostrarConfirmarNovaSenha === "password") {
      setMostrarConfirmarNovaSenha("text")
      setIconeConfirmarNovaSenha(icone_senha_visivel)
    } else {
      setMostrarConfirmarNovaSenha("password")
      setIconeConfirmarNovaSenha(icone_senha_nao_visivel)
    }
  }

  /*esta função verifica se os inputs já foram confirmados, */
  useEffect(() => {
    if (foiConfirmado ) {
      checkConfirmarNovaSenha()
      checkNovaSenha()
      checkSenhaAtual()
    }
  });

  /*esta função  verifica se o input "senha atual"  está ou não vazio */
  function checkSenhaAtual() {
    if (senhaAtual === "") {
      setClasseSenhaAtual("modal__field-input-icons-container error")
      setSmallSenhaAtual("Informe a senha atual");
    } else {
      setClasseSenhaAtual("modal__field-input-icons-container success")
    }
  }
/*esta função  verifica se o input "nova senha"  está ou não vazio */
  function checkNovaSenha() {
    if (novaSenha === "") {
      setClasseNovaSenha("modal__field-input-icons-container error")
      setSmallNovaSenha("Informe a nova senha");
    } else {
      setClasseNovaSenha("modal__field-input-icons-container success")
    }
  }

  /*esta função  verifica se o input "confirmar nova senha"  está ou não vazio,e se as senhas informadas são iguais*/
  function checkConfirmarNovaSenha() {
    if (confirmarNovaSenha === "") {
      setClasseConfirmarNovaSenha("modal__field-input-icons-container error")
      setSmallConfirmarNovaSenha("Confirme a nova senha");
    } else if (novaSenha !== confirmarNovaSenha) {
      setClasseConfirmarNovaSenha("modal__field-input-icons-container error")
      setSmallConfirmarNovaSenha("As senhas não conferem");
    } else {
      setClasseConfirmarNovaSenha("modal__field-input-icons-container success")
    }
  }

  /*esta função verifica os inputs do modal*/
  function onClickConfirmar(e) {
    e.preventDefault();
    setFoiConfirmado(true);
    checkSenhaAtual();
    checkNovaSenha();
    checkConfirmarNovaSenha();
  }

  return (
    <div className="modal__overlay">
      <div className="modal__container">
        <h2 className="modal__title">Alterar senha</h2>
        <h1 className="modal__required-field-title">*Campos Obrigatórios</h1>
        <div className="modal__field">
          <label className="modal__field-label" htmlFor="senhaAtual">
            SENHA ATUAL
                <span className="modal__required-field"> *</span>
          </label>
          <div className={classeSenhaAtual} >
            <input className="modal__field-input-senha" id="senhaAtual" type={mostrarSenhaAtual} onChange={e => setSenhaAtual(e.target.value)} />
            <img className="modal__field-input-senha-img" src={iconeSenhaAtual} alt="senha" onClick={alteraIconeSenhaAtual} />
            <i className="modal__field-input-icons fas fa-check-circle "></i>
            <i className="modal__field-input-icons fas fa-exclamation-circle "></i>
            <small className="modal__field-small">{smallSenhaAtual}</small>
          </div>
        </div>
        <div className="modal__field">
          <label className="modal__field-label" htmlFor="novaSenha">
            NOVA SENHA
               <span className="modal__required-field"> *</span>
          </label>
          <div className={classeNovaSenha}>
            <input className="modal__field-input-senha" id="novaSenha" type={mostrarNovaSenha} onChange={e => setNovaSenha(e.target.value)} />
            <img className="modal__field-input-senha-img" src={iconeNovaSenha} alt="senha" onClick={AlterarIconeNovaSenha} />
            <i className="modal__field-input-icons fas fa-check-circle "></i>
            <i className="modal__field-input-icons fas fa-exclamation-circle "></i>
            <small className="modal__field-small">{smallNovaSenha}</small>
          </div>
        </div>
        <div className="modal__field">
          <label className="modal__field-label" htmlFor="cofirmaNovaSenha">
            CONFIRME A NOVA SENHA
                <span className="modal__required-field"> *</span>
          </label>
          <div className={classeConfirmarNovaSenha}>
            <input className="modal__field-input-senha" id="confirmarNovaSenha" type={mostrarConfirmarNovaSenha} onChange={e => setConfirmarNovaSenha(e.target.value)} />
            <img className="modal__field-input-senha-img" src={iconeConfirmarNovaSenha} alt="senha" onClick={AlterarIconeConfirmarNovaSenha} />
            <i className="modal__field-input-icons fas fa-check-circle "></i>
            <i className="modal__field-input-icons fas fa-exclamation-circle "></i>
            <small className="modal__field-small">{smallConfirmarNovaSenha}</small>
          </div>
        </div>
        <div className="modal__btn-group">
          <div className="modal__botao-confirmar">
            <BotaoConfirmar onClick={e => onClickConfirmar(e)} titulo="CONFIRMAR" ></BotaoConfirmar>
          </div>
          <BotaoCancelar onClick={props.onClose} titulo="CANCELAR" ></BotaoCancelar>
        </div>
      </div>
    </div>
  )
}
export default ModalAlterarSenha;