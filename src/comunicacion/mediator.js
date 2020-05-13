import React from 'react';
import ReactDOM from 'react-dom';

function Display (props){
    return (
    <span>{props.count}</span>
    )
}

function Updater (props){
    return(
    <button onClick={props.update}>Click!</button>
    
        )
}

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count: 0
        };
    }
_update = () =>{
    this.setState({
        count:this.state.count + 1
    });
}   
render(){
    return (
      <React.Fragment>
        <Display count={this.state.count} />
        <br />
        <Updater update={this._update} />
      </React.Fragment>
    );
} 
}   

ReactDOM.render(
  <React.StrictMode>
    <Counter></Counter>
  </React.StrictMode>,
  document.getElementById("root")
);