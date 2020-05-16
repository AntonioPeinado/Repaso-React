import React from "react";
import ReactDOM from "react-dom";

export default function Horizontal(props) {
    
    const style = {
        displey:'flex'
    };
  return (<div>
  <div style={style}>{props.children}</div>
  
    </div>
    )    
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

