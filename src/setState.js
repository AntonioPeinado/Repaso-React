import React from 'react';


class CambioState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ clicked: true });
  }
  render() {
    if (this.state.clicked) {
      return (
        <div>
          <h1>B</h1>
          <button onClick={this.handleClick}>B</button>
        </div>
      );
    }
      
    return (
    <div>
      <h1>A</h1>
      <button onClick={this.handleClick}>B</button>
    </div>
 ) }
}


export default CambioState;