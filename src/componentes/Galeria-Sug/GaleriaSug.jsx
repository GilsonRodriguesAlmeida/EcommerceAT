import React from "react";
import Card from "../Card/Card"
import "./GaleriaSug.css";

const GaleriaSug = ({cards}) => {
  return (
    <>
      <div className="main">
        <div className="page-inner">
          <h3 className="section-title"></h3>
          <div className="subtitle-underline"></div>
          <div className="cols cols-4">
            {cards.map((card, index) => (
              <Card 
                key={card.index}
                imagem={card.imagem}
                productName={card.productName}
                stars={card.stars}
                moeda={card.moeda}
                price={card.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GaleriaSug;
