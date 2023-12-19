import React from 'react';
import { useState } from 'react'
import CardDetails from '../CardDetails/CardDetails';

import './Body.css';

const Body = (props) => {

    const [openCardModal, setCardModal] = useState(false);

    const dadosNotebook = [
        {
            marca: 'MSI',
            modelo: 'Gamer',
            diferenciais: 'Câmera 720p Com Privacidade',
            tela: '15.6',
            resolucaoTela: 'Full hd (1920 X. 1080) Antirreflexo',
            sistemaOperacional: 'Windows 11 Home',
        },
    ]

    return (
        <>
            <body>
                <div className='body-inner-content'>
                    <div className='body-bottom-side'>
                        <div className='body-bottom-side-left'>
                            <h2>{props.title}</h2>
                            <p>{props.paragrafo}</p>
                            <button onClick={() => setCardModal(true)}>{props.textBtn}</button>
                        </div>
                        <div className='body-bottom-side-right'>
                            <img src={props.imagem} />
                        </div>
                        
                        <CardDetails openCard={openCardModal} setModalClosed={() => setCardModal(!openCardModal)}>
                            <div>
                                <h3>Especificações: </h3>
                                {dadosNotebook.map(dados => (
                                    <div>
                                        <p>Marca: {dados.marca}</p>
                                        <p>Modelo: {dados.modelo}</p>
                                        <p>Diferenciais: {dados.diferenciais}</p>
                                        <p>Tela: {dados.tela}</p>
                                        <p>Resolução Tela: {dados.resolucaoTela}</p>
                                        <p>Sistema Operacional: {dados.sistemaOperacional}</p>
                                    </div>
                                ))}
                            </div>
                        </CardDetails>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Body;