import React from "react";


export function Hijo(props) {
  return <button onClick={props.update}>Click</button>;
}
export default class Padre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  _update() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <React.Fragment>
        <Hijo update={this._update.bind(this)} />
        <h1>{this.state.count}</h1>
      </React.Fragment>
    );
  }
}



