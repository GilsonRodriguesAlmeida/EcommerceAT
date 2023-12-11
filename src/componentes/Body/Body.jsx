import React from 'react';

import './Body.css';

const Body = (props) => {
    return (
        <>
            <body>
                <div className='body-inner-content'>
                    <div className='body-bottom-side'>
                        <div className='body-bottom-side-left'>
                            <h2>{props.title}</h2>
                            <p>{props.paragrafo}</p>
                            <button>{props.textBtn}</button>
                        </div>
                        <div className='body-bottom-side-right'>
                            <img src={props.imagem} />
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Body;