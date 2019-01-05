import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Menu extends Component{
    render(){
        return(
        <div className="menu">
          <Link exact to="/">
            <div className="navlogo">
            </div>
          </Link>
          <div className="menuitms">
            <Link exact to="/"><div className="menuitm">About</div></Link>
            <Link exact to="/projects"><div className="menuitm">Projects</div></Link>
            <Link exact to="/contact"><div className="menuitm">Contact</div></Link>
          </div>
        </div>
        );
    }
}
export default Menu;