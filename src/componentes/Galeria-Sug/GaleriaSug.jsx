import React from "react";

import "./GaleriaSug.css";

const GaleriaSug = (props) => {
  return (
    <>
      <div className="main">
        <div className="page-inner">
          <h3 className="section-title">{props.title}</h3>
          <div className="subtitle-underline"></div>
          <div className="cols cols-4">
            <div>
              <img src={props.imagem} alt="" />
              <p className="product-name">{props.productName}</p>
              <p className="rate">{props.stars}</p>
              <p className="product-price">
                <span>{props.moeda}</span>{props.price}
              </p>
            </div>

            <div>
              <img src={props.imagem} alt="" />
              <p className="product-name">{props.productName}</p>
              <p className="rate">{props.stars}</p>
              <p className="product-price">
                <span>{props.moeda}</span>{props.price}
              </p>
            </div>

            <div>
              <img src={props.imagem} alt="" />
              <p className="product-name">{props.productName}</p>
              <p className="rate">{props.stars}</p>
              <p className="product-price">
                <span>{props.moeda}</span>{props.price}
              </p>
            </div>

            <div>
              <img src={props.imagem} alt="" />
              <p className="product-name">{props.productName}</p>
              <p className="rate">{props.stars}</p>
              <p className="product-price">
                <span>{props.moeda}</span>{props.price}
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default GaleriaSug;
