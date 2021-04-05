import { render } from '@testing-library/react';
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App from '../App';

//  const Button = () => {
//     return (
//         <div>
//             <Router>
//             <Link to="/">
//                 <button type="button">Home</button>
//             </Link>
//             <Route path="/" exact component={App}/>
//             </Router>
//         </div>
//     )
// }



class Button extends React.Component {
    handleClick = () => {
        <Router>
            <Link to="/">
                <button type="button">Home</button>
            </Link>
            <Route path="/" exact component={App} />
        </Router>
    }


    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}

export default Button;
