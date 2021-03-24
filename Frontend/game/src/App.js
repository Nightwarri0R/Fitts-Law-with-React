import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Consent from './components/Consent';
import Interface from './components/Interface';
import React from "react";




function App() {
  return (
    <div>
      <div className="menu_container">
        
        <Router>
          <Interface/>
          <Switch>
          <Link to="/about"><Consent/></Link>
          <Route path="/" exact component={() => <Consent/>} />
          </Switch>
        </Router>
        
      
        </div>


      </div>

    //</div>


  );
}

export default App;
