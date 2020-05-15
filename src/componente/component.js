import React from "react";
import ReactDOM from "react-dom"; 
class Component extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Componente que pinta otro componente</h1>
      </React.Fragment>
    );
  }
}
 ReactDOM.render(
   <React.StrictMode>
     <Component />
   </React.StrictMode>,
   document.getElementById("root")
 );

