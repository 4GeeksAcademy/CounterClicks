import React from "react";



const Contador = ({ numClicks }) => {
    return ( 
        <div className="contador">
            { numClicks }
        </div>
    );
}

export default Contador;