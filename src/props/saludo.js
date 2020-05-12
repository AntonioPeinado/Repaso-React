import React from 'react';
import ReactDOM from "react-dom";
function Saludo(props) {
    return(
    <span>Hello {props.nombre}</span>
    )
}
ReactDOM.render(
  <React.StrictMode>
    <Saludo nombre= 'Antonio'  />
  </React.StrictMode>,
  document.getElementById("root")
);