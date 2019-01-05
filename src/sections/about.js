import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const push = {
    marginTop: '20px',
}
class About extends Component{
    render(){
        return(
            <div className="row about center">
                <h4>
                Who am I?
                </h4>
                <p>
                Hey there! Thanks for stopping by. I'm a first-year undergraduate student pursuing 
                Information Systems at Carnegie Mellon University. I am interested in product management, full-stack software
                engineering, and ui/ux design. <br/>
                </p>
                <p style={push}><Link to="/contact"><span className="lev"> Get in touch </span></Link></p>
            </div>
        );
    }
}
export default About;