import React from 'react';
import './BotaoLimpar.css';

const BotaoLimpar = (props) => {
  return (
    <button onClick={props.onClick} className="btn-limpar"  >
   <svg className="botao__icone-limpar" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="19" height="18" viewBox="0 0 19 18"><defs><clipPath ></clipPath></defs><g transform="translate(-0.06 -0.051)" ><path d="M16.574,9.022l-5.1-6.8L4.417,7.559l5.3,6.576L11.05,13.2Z" transform="translate(1.548 -0.184)" fill="#a8a8a8"  stroke-linejoin="round" /><path d="M10.566,13.006,9.044,14.232H4.853L3.822,12.856,1.27,9.454,5.41,6.32" transform="translate(0.7 0.945)" strokeLinejoin="round"/><path d="M4.127,12.523h12.44" transform="translate(1.47 2.653)"/></g></svg>
     LIMPAR
  </button>
  )
}

export default BotaoLimpar;