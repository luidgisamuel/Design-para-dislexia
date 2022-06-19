import React from 'react';
import './BotaoConfirmar.css';

const BotaoConfirmar = (props) => { 
    return (
      <button onClick={props.onClick} className={"btn-confirmar " +  props.className} >
       <svg className="botao__icone"  xmlns="http://www.w3.org/2000/svg" Xlink="http://www.w3.org/1999/xlink" width="18" height="16" viewBox="0 0 18 16"><defs><clipPath id="confirmar"><rect width="18" height="16" transform="translate(598 442)" stroke="#707070"/></clipPath></defs><g transform="translate(-598 -442)"><g transform="translate(599.815 442)"><path d="M5.874,15.5a1.544,1.544,0,0,1-1.23-.612L.687,9.663A1.544,1.544,0,0,1,3.148,7.8l2.6,3.436L12.3.727a1.544,1.544,0,1,1,2.62,1.632L7.184,14.773a1.543,1.543,0,0,1-1.24.726Z" transform="translate(-0.374 0)" /></g></g></svg>
        {props.titulo}
      </button>
    )  
}

export default BotaoConfirmar;