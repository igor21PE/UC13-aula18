import React, { useState } from 'react';
 
function BotaoAltenado(){
    const[count, setCount] = useState("inativo");
    return(
        <div>
            <p>desligue ou ligue o botão</p>
            <button onClick={() => setCount(count === "desligado")}>desligar</button>
            <button onClick={() => setCount(count === "ligado")}>ligar</button>
        </div>
    )
}

export default BotaoAltenado;