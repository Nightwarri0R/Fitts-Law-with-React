import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import App from '../App';
import Navigation from './Interface';


class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state={
        clicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log("Button Clicked");
        this.setState({
            clicked: true
            
        });
        
       
        
        console.log("Button Clicked2");
    }

    navigation =() =>{
        console.log("hi there");
      <Router>
          <Navigation/>
      </Router>
    }

    render() {
        return (
            <div>
                
                <button onClick={this.handleClick}>
                    Home
                    {this.state  ? this.navigation():null}
            </button>
            </div>

        );
    }
}

export default Button;
