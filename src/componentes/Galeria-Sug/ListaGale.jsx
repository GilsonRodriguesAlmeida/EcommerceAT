import React from "react";
import GaleriaSug from "./GaleriaSug";

const GaleriaList = ({ cards }) => {
    return (
        <>
            <div className="card-list">
            {cards.map((card, index) => (
                <GaleriaSug
                    key={index}
                    imagem={card.imagem}
                    productName={card.productName}
                    stars={card.stars}
                    moeda={card.moeda}
                    price={card.price}
                />
            ))}
        </div>

        </>
    )
}

export default GaleriaList;