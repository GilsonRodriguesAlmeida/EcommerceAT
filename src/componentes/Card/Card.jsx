import React from 'react';
import { useState } from 'react'

import "./Card.css"

import CardDetails from '../CardDetails/CardDetails';

const Card = (props) => {

  const [openCardModal, setCardModal] = useState(false);
  const [openCardVendedor, setCardVendedor] = useState(false);

  const dadosProdutos = [
    {
      cor: 'preto',
      armazenamento: '512GB',
      tela: 'Oled sem Bordas',
      camera: 'Camera Pro',
    },  
  ]

  const dadosVendedor = [
    {
      nome: 'Gilson Almeida', 
      email: 'ecommerceat@ecommerce.com',
      telefone: '+55(41)2531-8951',
      nota: '05',
  }
  ]
    return (
        <>
            <div className='card-card'>
              <img src={props.imagem} alt="" />
              <p>{props.productName}</p>
              <p>{props.stars}</p>
              <p>
                <span>{props.moeda}</span>{props.price}
              </p>
              <button onClick={() => setCardModal(true)}>Detalhes</button> <br/>
              <button onClick={() => setCardVendedor(true)}>Info Vendedor</button>
            </div>
            <CardDetails openCard={openCardModal} setModalClosed={() => setCardModal(!openCardModal)}>
              <div>
                {dadosProdutos.map(dados => (
                  <div>
                    <h3>Especificações:</h3>
                    <p>Cor: {dados.cor}</p>
                    <p>Armazenamento: {dados.armazenamento}</p>
                    <p>Tela: {dados.tela}</p>
                    <p>Camera: {dados.camera}</p>
                  </div>
                ))}            
              </div>
            </CardDetails>
            <CardDetails openCard={openCardVendedor} setModalClosed={() => setCardVendedor(!openCardVendedor)}>
            <div>
                {dadosVendedor.map(dados => (
                  <div>
                    <h3>Informações Vendedor:</h3>
                    <p>Nome: {dados.nome}</p>
                    <p>E-mail: {dados.email}</p>
                    <p>Telefone: {dados.telefone}</p>
                    <p>Pontuação Vendedor: ({dados.nota})</p>
                  </div>
                ))}            
              </div>
            </CardDetails>
        </>
    )
}

export default Card;