import React from 'react';

const number = [1,2,3,4];
export default function Lista (){

    return (
        <ul>
            {number.map((n,i) =>{
                return <li key={i}>{n}</li>
            })}
        </ul>
    );
}
