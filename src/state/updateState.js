import React from "react";
import ReactDOM from "react-dom";


class UpdateStateWithClass extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            count : 0
        };
    }
    _onClick = () =>{
        this.setState({
            count: this.state.count + 1
        });
    }
    render(){
        return(
            <div>
                <button onClick={this._onClick}>Click</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}



ReactDOM.render(
  <React.StrictMode>
    <UpdateStateWithClass/>
  </React.StrictMode>,
  document.getElementById("root")
);