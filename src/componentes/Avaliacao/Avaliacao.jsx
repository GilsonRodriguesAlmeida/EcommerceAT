import React from "react";

import './Avaliacao.css';

const Avaliacao = (props) => {

  return (
    <>
      <div className="page-inner-content">
        <div className="avaliacoes">
          <div className="avaliacao">
            <p>"</p>
            <p>{props.coment}</p>
            <p className="starColor">&#9733;&#9733;&#9733;&#9733;&#9733;{props.nota}</p>
            <p>{props.autor}</p>
            <p>{props.data}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Avaliacao;