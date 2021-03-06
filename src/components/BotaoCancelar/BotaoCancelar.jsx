import React from 'react';
import './BotaoCancelar.css';

const BotaoCancelar = (props) => { 
    return (
      <button onClick={props.onClick} className={"btn-cancelar " + props.className}>
        <svg className="botao__icone" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="18" height="16" viewBox="0 0 18 16"><defs><clipPath id="cancelar"><rect width="18" height="16" transform="translate(680 401)"  stroke="#707070"/></clipPath></defs><g transform="translate(-680 -401)" ><g transform="translate(679.588 399.588)"><path d="M9.412,11.531,3.7,17.245,1.578,15.126,7.292,9.412,1.578,3.7,3.7,1.578,9.412,7.292l5.714-5.714L17.245,3.7,11.531,9.412l5.714,5.714-2.119,2.119Z"/><path d="M3.7,1.744,9.245,7.292l.167.167.166-.166,5.548-5.548L17.079,3.7,11.531,9.245l-.166.166.166.166,5.548,5.548-1.953,1.953L9.578,11.531l-.166-.166-.166.166L3.7,17.079,1.744,15.126,7.292,9.578l.166-.166-.166-.166L1.744,3.7,3.7,1.744m11.429-.333L9.412,7.126,3.7,1.412,1.412,3.7,7.126,9.412,1.412,15.126,3.7,17.412,9.412,11.7l5.714,5.714,2.286-2.286L11.7,9.412,17.412,3.7,15.126,1.412Z" /></g></g></svg>
        {props.titulo}
      </button>
    )  
}

export default BotaoCancelar;