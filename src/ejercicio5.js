/* Cree un componente de React que haga una petición a 
https://jsonplaceholder.typicode.com/todos y 
pinte el resultado como una cadena de texto (JSON.stringify)*/
import React from "react";
import ReactDOM from "react-dom";

class Ejercicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ejercicioItems: [],
    };
  }
  componentDidMount() {
    this._getEjercicioItems();
  }
  async _getEjercicioItems() {
    const response = await fetch("http://jsonplaceholder.typicode.com/todos", {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const body = await response.json();
    this.setState({ ejercicioItems: body });
  }

  render() {
    return (
      <nav className="ejercicio__navigation">
        {JSON.stringify(this.state.ejercicioItems)}
      </nav>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Ejercicio />
  </React.StrictMode>,
  document.getElementById("root")
);
