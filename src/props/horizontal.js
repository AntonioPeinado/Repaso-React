import React from "react";


export default function Horizontal(props) {
    
    const style = {
        displey:'flex'
    };
  return (<div>
  <div style={style}>{props.children}</div>
   <Horizontal>
        <div>Hello</div>
        <div>World</div>
    </Horizontal>
    </div>
    )    
}


