import React from 'react';
import ReactDOM from "react-dom";
//pinta un componente
function PrintHola () {
   
    return <h1>Hello!</h1>

}
ReactDOM.render(
  <React.StrictMode>
    <PrintHola/>
  </React.StrictMode>,
  document.getElementById("root")
);