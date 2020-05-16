import React from "react";




export default class Ref extends React.Component {
  constructor(props) {
    super(props);
    this._inputRef= React.createRef(); 
}
componentDidMount(){
  const input = this._inputRef.current;
  input.focus();
}
render(){
  return (
    <React.Fragment>
      <input type="text" />
      <input input ref={this._inputRef} type="text" />
      <input type="text" />
    </React.Fragment>
  );
}
}


