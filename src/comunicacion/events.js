import React from "react";
import ReactDOM from "react-dom";

function Event() {
    var onClick = () =>{
        window.alert('Click!');
     }
    return <button onClick={onClick}>Click!</button>
}

ReactDOM.render(
  <React.StrictMode>
    <Event></Event>
  </React.StrictMode>,
  document.getElementById("root")
);