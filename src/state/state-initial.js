import React from "react";
import ReactDOM from "react-dom";

class InitialState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            foo: 'Hello World'
        }
    }
    render(){
        return(
        <h1>{this.state.foo}</h1>
        )
    }
}
export default InitialState;

ReactDOM.render(
  <React.StrictMode>
    <InitialState></InitialState>
  </React.StrictMode>,
  document.getElementById("root")
);