import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Consent from './components/Consent';
import Interface from './components/Interface';
import React from "react";


function App() {
  return (
    <div>
      <div className="menu_container">

        <Router>
        

          <Switch>
            <Route path="/about">
              
            </Route>
            <Route path="/components/Consent'">
              <Consent/>
            </Route>
            <Route path="/">
              <Interface/>
            </Route>
          </Switch>

        </Router>

      </div>
    </div>
      );
      }

      export default App;
