import React from 'react';
import './BotaoNovo.css';

const BotaoNovo = (props) => {
  return (
    <button onClick={props.onClick} className={"btn-novo " } >
       <svg className="botao__icone-abrir" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="14" height="11" viewBox="0 0 14 11"><defs><clipPath></clipPath></defs><g transform="translate(-1052 -333)" ><g transform="translate(1052.492 334.244)"><path d="M8.217,4.25a6.714,6.714,0,0,0-6.4,4.428,6.714,6.714,0,0,0,6.4,4.428,6.714,6.714,0,0,0,6.4-4.428A6.714,6.714,0,0,0,8.217,4.25Z" transform="translate(-1.821 -4.25)" fill="none" stroke-linejoin="round" /><circle cx="2.46" cy="2.46" r="2.46" transform="translate(3.936 1.968)" fill="none" stroke-linejoin="round"/></g></g></svg>
      {props.titulo}
    </button>
  )
}

export default BotaoNovo;