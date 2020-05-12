import React from 'react';
import ReactDOM from "react-dom";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(window.alert("‘Click’"));
  }


  render() {
    return(
        <button onClick={this.handleClick}>Click Alert</button>
    )};
}
ReactDOM.render(
  <React.StrictMode>
    <Alert></Alert>
  </React.StrictMode>,
  document.getElementById("root")
);

