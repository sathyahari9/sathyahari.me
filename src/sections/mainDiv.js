import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import logo from './assets/s.png';
import shadow from './assets/logoshadow.png';
import resume from './assets/resume.pdf';
import About from './about.js';
import Fade from 'react-reveal/Fade';

const primary = red[500]; // #F44336
const accent = purple['A200']; // #E040FB
const accent2 = purple.A200; // #E040FB (alternative method)

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: 20,
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight:'600',
    letterSpacing: '2px',
    textTransform: 'none',
    fontSize:'1em',
    backgroundColor: '#86D0F7',
    boxShadow: '0 2px 3px rgba(0,0,0,0.1)',
    border:'none',
    borderRadius:'30px',
    color:'rgba(255,255,255,1)',
    '&:hover': {
      backgroundColor: '#86D0F7',
    },
  },
  buttonC: {
    color: '#fff',
    fontFamily: 'Avenir',
    letterSpacing: '2px',
    textTransform: 'none',
    fontSize:'1em',
    border: 'none',
    padding:5,
    paddingTop:10,
    marginLeft:10,
    height: 40,
    borderRadius:0,
    boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.1)',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0)',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'rgba(255,255,255,0)',
    },
    '&:focus': {
      boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.8)',
    },
  }
});

function CenteredGrid(props) {
  document.title = "Sathya Hari"
  const { classes } = props;

  return (
    <React.Fragment>
    <div className='main'>
      <div className='main-s'>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} container spacing={12}>
            <img src={logo} className="logo" />
            <img src={shadow} className="shadow" />
            </Grid>
            <Grid item xs={12} sm={6} container spacing={12}>
              <Fade>
                <div>
                  <h1 className="main-heading">
                  Developer.<br/>
                  Product Enthusiast.
                  </h1>
                  <div className="butsec">
                    <Button href={resume} variant="outlined" waves="light" className={classes.button}>
                      View Resume
                    </Button>
                  </div>
                </div>
              </Fade>
            </Grid>
          </Grid>
      </div>
      <About></About>
    </div>
    </React.Fragment>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);