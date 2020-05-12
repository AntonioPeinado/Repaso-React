import React from 'react';

function Hijo1 (){
return <h1>{}</h1>
}

function Padre1 (){
    return <Hijo1></Hijo1>
}

function Hijo2 (){
    return <button>Actualizar</button>
}

function Padre2 (){
    return(
        <div>
            <h1>Contador</h1>
            <hijo2></hijo2>
        </div>
    )
}