import React from "react";
import './CardDetails.css'

const CardDetails = ({openCard, setModalClosed, children}) => {
    if(openCard) {
        return (
            <>
                <div className="bg">
                    <div className="btn-closed" onClick={setModalClosed}>X</div>
                    <div className="card-modal">
                        <div>{children}</div>
                    </div>
                </div>
            </>
        )
    }
    return null;
}

export default CardDetails;