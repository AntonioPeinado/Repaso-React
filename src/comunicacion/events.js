import React from "react";


export default function Event() {
    var onClick = () =>{
        window.alert('Click!');
     }
    return <button onClick={onClick}>Click!</button>
}

