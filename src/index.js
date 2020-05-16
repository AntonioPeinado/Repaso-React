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
                  <Link to="/alert/alert">alert</Link>
                </li>
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
                {/* <li>
                  <Link to="/life/lifeCicle">lifeCicle</Link>
               </li>*/}
                <li>
                  <Link to="/comunicacion/mediator">mediator</Link>
                </li>
                <li>
                  <Link to="/comunicacion/padre-hijo">padre-hijo</Link>
                </li>
                <li>
                  <Link to="/condicional/condicional">condicional</Link>
                </li>
                <li>
                  <Link to="/condicional/listas">listas</Link>
                </li>
                <li>
                  <Link to="/props/horizontal">horizontal</Link>
                </li>
                <li>
                  <Link to="/props/layout">layout</Link>
                </li>
                <li>
                  <Link to="/props/saludo">saludo</Link>
                </li>
                <li>
                  <Link to="/ref/ref">ref</Link>
                </li>
                <li>
                  <Link to="/state/state-initial">state-initial</Link>
                </li>
                <li>
                  <Link to="/state/updateState">updateState</Link>
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
                    component={React.lazy(() =>
                      import("./comunicacion/events")
                    )}
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
                  {/*<Route
                    path="/life/lifeCicle"
                    exact
                    component={React.lazy(() =>
                      import("./life/lifeCicle")
                    )}
                    ></Route>*/}
                  <Route
                    path="/alert/alert"
                    exact
                    component={React.lazy(() => import("./alert/alert"))}
                  ></Route>
                  <Route
                    path="/comunicacion/mediator"
                    exact
                    component={React.lazy(() =>
                      import("./comunicacion/mediator")
                    )}
                  ></Route>
                  <Route
                    path="/comunicacion/padre-hijo"
                    exact
                    component={React.lazy(() =>
                      import("./comunicacion/padre-hijo")
                    )}
                  ></Route>
                  <Route
                    path="/condicional/condicional"
                    exact
                    component={React.lazy(() =>
                      import("./condicional/condicional")
                    )}
                  ></Route>
                  <Route
                    path="/condicional/listas"
                    exact
                    component={React.lazy(() => import("./condicional/listas"))}
                  ></Route>
                  <Route
                    path="/props/horizontal"
                    exact
                    component={React.lazy(() => import("./props/horizontal"))}
                  ></Route>
                  <Route
                    path="/props/layout"
                    exact
                    component={React.lazy(() => import("./props/layout"))}
                  ></Route>
                  <Route
                    path="/props/saludo"
                    exact
                    component={React.lazy(() => import("./props/saludo"))}
                  ></Route>
                  <Route
                    path="/ref/ref"
                    exact
                    component={React.lazy(() => import("./ref/ref"))}
                  ></Route>
                  <Route
                    path="/state/state-initial"
                    exact
                    component={React.lazy(() =>
                      import("./state/state-initial")
                    )}
                  ></Route>
                  <Route
                    path="/state/updateState"
                    exact
                    component={React.lazy(() => import("./state/updateState"))}
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