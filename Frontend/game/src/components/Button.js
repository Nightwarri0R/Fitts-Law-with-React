import React from 'react'
import Navigation from './Interface';
import ReactDOM from 'react-dom';



class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state={
        clicked: false,
        some_component:"",
        
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log("Button Clicked");
        this.setState({
        
            clicked: true    
        });
        
    
       //window.location.replace("./Navitem")
  

    }
    

    render() {
        return (
            <div>
                
                <button onClick={this.handleClick}>
                    Home </button>
                    {this.state.clicked  ? this.props.some_component
                : null } 
                
                
            </div>

        );
}}

export default Button;

