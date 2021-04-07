import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Consent from './components/Consent';
//import Button from './components/Button';
import Navigation from "./components/Interface";
import Container from 'react-bootstrap/Container';

import {Menu, MenuItem,} from '@material-ui/core';

import React from "react";


function App() {
  return (
    
    <div className="App-header">
      <Container>
      <Consent/>
      <Router> 
      <Navigation/>
      </Router>
     

      </Container>
      
      <div>
       
        </div></div>
  
      );
      }

      export default App;
