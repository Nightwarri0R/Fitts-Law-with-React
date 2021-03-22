
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Consent from './components/Consent';

function App() {
  return (
    <div>

      <header>
        <h1>Pop the Bubbles !</h1>
      </header>
      <Router>
        <Switch>
          <Route path="./components/Consent" exact component={() =><Consent/>}/>

        </Switch>
      </Router>
  
    </div>


  );
}

export default App;
