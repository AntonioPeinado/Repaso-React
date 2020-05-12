import React from 'react';
import ReactDOM from "react-dom";
const number = [1,2,3,4];
function Lista (){

    return (
        <ul>
            {number.map((n,i) =>{
                return <li key={i}>{n}</li>
            })}
        </ul>
    );
}
ReactDOM.render(
  <React.StrictMode>
    <Lista/>
  </React.StrictMode>,
  document.getElementById("root")
);