import React from "react";

import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer-dark">
                <div className="page-inner-content footer-content">
                    <div className="download-options">
                        <p>Baixe nosso App para Android e iOS</p>
                        <div>
                            <img src="/images/images/play-store.png" alt=""/>
                            <img src="/images/images/app-store.png" alt=""/>
                        </div>
                    </div>

                    <div className="logo-footer">
                        <h1 className="logo">
                            Ecommerce<span>AT</span>
                        </h1>
                        <p>Fique um passo na frente em tecnologia!</p>
                    </div>
                    <div className="links-footer">
                        <h3>Links úteis</h3>
                        <ul>
                            <li>Cupons</li>
                            <li>Blog Post</li>
                            <li>Políticas</li>
                        </ul>
                    </div>
                </div>
                <hr className="page-inner-content"/>
                <div className="page-inner-content copyright">
                    <p>Copyright 2023 - Assessment Mobile-first UI com React</p>
                </div>
            </div>
        </>
    )
}

export default Footer;