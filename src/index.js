import React from "react";
import ReactDOM from "react-dom"; 
import { BrowserRouter,Switch, Route, Link  } from "react-router-dom";

const examples = [
    '/componente/component',
    '/componente/printHola',
    '/comunicacion/events',
    '/comunicacion/hijo-padre',
    '/comunicacion/mediator',
    '/comunicacion/padre-hijo',
    '/condicional/condicional',
    '/condicional/listas',
    '/fetch/fetch',
    '/life/controlleInput',
    '/life/lifeCicle',
    '/props/horizontal',
    '/props/layout',
    '/props/saludo',
    '/ref/ref',
    '/state/state-initial',
    '/state/updateState',
    '/alert' 
]
 function App(){
      return (
        <React.StrictMode>
          <BrowserRouter>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gridColumnGap: "15px",
              }}>
              <nav>
                <ul>
                    {examples.map((example, i) => {
                      return (
                        <li key={i}>
                          <Link to={`/${example}`}>{example}</Link>
                        </li>
                      );
                    })}
                  
                </ul>
              </nav>
              <main>
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    {examples.map((example, i) => {
                      return (
                        <Route
                          key={i}
                          exact
                          path={`/${example}`}
                          component={React.lazy(() => import(`./${example}`))}
                        />
                      );
                    })}

                    {/* <Route
                      exact
                      path="/componente/component"
                      component= {React.lazy(() => import("./componente/component" ))} />
                    <Route
                      exact
                      path="/fetch/fetch"
                      component={React.lazy(() => import("./fetch/fetch"))} />
                    <Route
                      exact
                      path="/comunicacion/events"
                      component={React.lazy(() => import("./comunicacion/events"))}/>*/}
                  </Switch>
                </React.Suspense>}
              </main>
            </div>
          </BrowserRouter>
        </React.StrictMode>
      )
 }
 ReactDOM.render(
    <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById("root")
 );
