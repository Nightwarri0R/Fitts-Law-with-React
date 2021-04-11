import React from "react";
import Consent from './Consent';
import Button1 from './Button'
import Navitem from './Navitem'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Router, Route, Link, Switch } from 'react-router-dom';
import App from '../App'

function Navigation(props) {
  return (
    <div className="App-header">
      <Container>
        <BrowserRouter>
          <nav>

            <label><Link to="/">PoP The Bubbles!</Link></label>
          </nav>
          <nav>
            <Button href="https://nightwarri0r.ddns.net/index.php/s/pn7tprqEYaBXEei">
              <Link to="/Consent"></Link>Consent Form
              </Button>
              
            <Button1 some_component={<Navitem />} />

          </nav>
          <Switch>
            <Route path="/">

            </Route>
            <Route path="/Consent">

            </Route>
            <Route exact path="/Play_game">

            </Route>

            <Route exact path="/Navitem">

            </Route>

          </Switch>
        </BrowserRouter>
      </Container>

    </div>
  );
}

export default Navigation;
