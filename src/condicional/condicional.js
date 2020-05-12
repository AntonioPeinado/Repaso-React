import React from 'react';
import ReactDOM from "react-dom";

const foo = true;

function Condicional(){

  return <h1>{foo ? 'A' : 'B' }</h1> 
}

ReactDOM.render(
  <React.StrictMode>
    <Condicional></Condicional>
  </React.StrictMode>,
  document.getElementById("root")
);