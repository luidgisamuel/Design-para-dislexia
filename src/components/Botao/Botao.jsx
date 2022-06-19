import React from 'react';
import './Botao.css';

const Botao= (props) => { 
    return (
      <button 
        onClick={props.onClick} 
        className={"btn " +  props.className} >    
        <i class="fas fa-angle-down icone "></i>
        {props.titulo}
      </button>
    )  
}

export default Botao;