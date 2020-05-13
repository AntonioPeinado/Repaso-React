import React from 'react';
import ReactDOM from 'react-dom';

class ApiFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simsonItems: [],
    };
  }

  componentDidMount() {
    this._getSimsonItems();
  }
  async _getSimsonItems() {
    const response = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes?character=Homer%20Simpson",
      {
        method: "GET",
        headers: { Accept: "application/json" }
      }
       
    );
    
    const body = await response.json();
    this.setState({ simsonItems: body });
   console.log(body);
  }
        

  render() {
    return (
      <ol>
        <li>{JSON.stringify(this.state.simsonItems)}</li>
      </ol>
    );
  }
}
  
ReactDOM.render(
  <React.StrictMode>
    <ApiFetch />
  </React.StrictMode>,
  document.getElementById("root")
);