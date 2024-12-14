import React, { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>seu numero atual: {count}</p>
            <button onClick={() => setCount(count +1)}>adicionar um</button>
            <button onClick={() => setCount(count -1)}>diminuir um</button>
        </div>
    );
}

export default Contador;