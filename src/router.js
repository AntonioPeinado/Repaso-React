//npm install react-router-dom;
//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//dentro del App pintar <BrowserRouter>;
//para navegar se utiliza Link con el atributo to;
//definimos rutas utilizando el componente <Route> con el atributo path;
//dentro del componente Route ponemos el componente que queremos que se pinte cuando la ruta esté activa;
//si queremos que solo se active una ruta al mismo tiempo hay que meterlas en un componente <Switch>;
//si en el path se ponen : indicamos que el valos es variable que es un parametro;
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
const Pizzas = React.lazy(() => import('./pizzas'));
const Home = React.lazy(() => import('./'));
const AddPizza = React.lazy(() => import('./pizza/add'));

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridColumnGap: "15px",
        }}
      >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pizzas">Pizzas</Link>
            </li>
            <li>
              <Link to="/pizza/add">Crear Pizzas</Link>
            </li>
          </ul>
        </nav>
        <main>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact>
                <Home> </Home>
              </Route>
              <Route path="/pizzas" exact>
                <Pizzas></Pizzas>
              </Route>
              <Route path="/pizza/add" exact>
                <AddPizza></AddPizza>
              </Route>
            </Switch>
          </React.Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);