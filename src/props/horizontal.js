import React from "react";
import ReactDOM from "react-dom";

function Horizontal(props) {
    
    const style = {
        displey:'flex'
    };
  return <div style={style}>{props.children}</div>
}


ReactDOM.render(
  <React.StrictMode>
    <Horizontal>
        <div>Hello</div>
        <div>World</div>
    </Horizontal>    
  </React.StrictMode>,
  document.getElementById("root")
);