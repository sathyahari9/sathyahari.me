import React, { Component } from 'react';
import logo from './logo.svg';
import MainDiv from './sections/mainDiv';
import './App.css';
import Projects from './sections/Projects';
import Menu from './sections/menu';
import Footer from './sections/footer';
import About from './sections/about';
import Contact from './sections/contact';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHeart);
library.add(fab, faLink);
library.add(fab, faPaperPlane);

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <Menu></Menu>
            <Switch>
              <Route exact path="/" component={MainDiv}>
              </Route>
              <Route exact path="/projects" component={Projects}>
              </Route>
              <Route exact path="/contact" component={Contact}>
              </Route>
            </Switch>
          <Footer></Footer>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
