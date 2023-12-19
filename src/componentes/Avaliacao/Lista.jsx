import React from "react";
import Avaliacao from "./Avaliacao";

const CardList = ({ cards }) => {
    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <Avaliacao
                    key={index}
                    coment={card.coment}
                    nota={card.content}
                    autor={card.autor}
                    data={card.data}
                />
            ))}
        </div>
    )
}

export default CardList;