import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App(){
    return (
      <React.StrictMode>
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
                  <Link to="/componente/component">component</Link>
                </li>
                <li>
                  <Link to="/fetch/fetch">fetch</Link>
                </li>
                <li>
                  <Link to="/componente/printHola">printHola</Link>
                </li>
                <li>
                  <Link to="/comunicacion/events">events</Link>
                </li>
                <li>
                  <Link to="/comunicacion/hijo-padre">hijo-padre</Link>
                </li>
                <li>
                  <Link to="/life/controlleInput">controlleInput</Link>
                </li>
              </ul>
            </nav>
            <main>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route
                    path="/componente/component"
                    exact
                    component={React.lazy(() =>
                      import("./componente/component")
                    )}
                  ></Route>
                  <Route
                    path="/fetch/fetch"
                    exact
                    component={React.lazy(() => import("./fetch/fetch"))}
                  ></Route>
                  <Route
                    path="/componente/printHola"
                    exact
                    component={React.lazy(() =>
                      import("./componente/printHola")
                    )}
                  ></Route>
                  <Route
                    path="/comunicacion/events"
                    exact
                    component={React.lazy(() => import("./comunicacion/events"))}
                  ></Route>
                  <Route
                    path="/comunicacion/hijo-padre"
                    exact
                    component={React.lazy(() =>
                      import("./comunicacion/hijo-padre")
                    )}
                  ></Route>
                  <Route
                    path="/life/controlleInput"
                    exact
                    component={React.lazy(() =>
                      import("./life/controlleInput")
                    )}
                  ></Route>
                </Switch>
              </React.Suspense>
            </main>
          </div>
        </BrowserRouter>
      </React.StrictMode>
    );
}
 ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById("root")
 );