import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return(
     <div>
        <Counter>
           <Display/>
            <Updater/>   
        </Counter>
     </div>
    )  
      
  }
}

class Display extends React.Componet{
 _update() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render(){
        return <h2>{this.state.count}</h2>
          }
}