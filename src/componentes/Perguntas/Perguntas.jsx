import React from 'react'

import './Perguntas.css'

export default function Perguntas({perguntas}) {
  return (
    <>
        <div className='perguntas'>
          <h2>Perguntas</h2>
          { perguntas.map(pergunta => (
              <div className='card-perguntas'>
                  <p>{pergunta.nome}</p>
                  <p>{pergunta.dataPublicacao}</p>
                  <p>{pergunta.pergunta}</p>
                  <p>{pergunta.resposta ?? "Sem resposta"}</p>
              </div>
          ))}
        </div>
    </>
  )
}
