import React, { useState } from "react";

function Stateseventos() {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);
    const [texto, setTexto] = useState('');

    function somador() {
        setContador(contador + 1)
    }


    return (
        <div>
            <div>
                Digite um texto:
                <input type="myInput" onChange={e => setTexto(e.target.value)} />
                {texto}
            </div>
            <input type="button" value='Somador' onClick={somador} />
            {contador}
            <button onClick={() => setContador2(contador2 + 1)}>
                Somar
            </button>
            {contador2}
        </div>
    )

}

export default Stateseventos;