import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Panel from './panel';
import ButtonCus from './button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  pad:{
    padding: '20em',
  }
});

function Projects(props){
    document.title = 'Projects'
    const { classes } = props;
        return (
            <React.Fragment>
                <div className="row center">
                    <Fade>
                        <h3>
                            Work
                        </h3>
                    </Fade>
                </div>
                <div className="row">
                {/* First row */}
                <Fade>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} container spacing={8} className={classes.pad}>
                            <Panel background="https://i.ibb.co/z8pqrrK/Main-screen-atm.png"></Panel>
                    </Grid>
                    <Grid item xs={12} sm={6} container spacing={8} className={classes.pad}>
                        <div className="description">   
                            <h4>
                            Tellr
                            </h4>
                            <p>
                            In May 2019, I attended the Capital One Software Engineering Summit at Richmond, VA. The summit culminated in a hackathon 
                            themed "Changing banking for good." My team and I created a banking app that promoted accessibility in banking by including voice control, and visual disability-friendly features 
                            to simplify the atm banking process. The project was built using React Native.
                            </p>
                            <ButtonCus link="https://github.com/DLo930/Tellr">
                            </ButtonCus>
                        </div>
                    </Grid>

                </Grid>
                </Fade>
                </div>
                <div className="row">
                {/* First row */}
                <Fade>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} container spacing={8} className={classes.pad}>
                            <Panel background="https://i.ibb.co/s5R10mt/opencv.png"></Panel>
                    </Grid>
                    <Grid item xs={12} sm={6} container spacing={8} className={classes.pad}>
                        <div className="description">   
                            <h4>
                            OpenCV piano
                            </h4>
                            <p>
                            In November 2018, I built a virtual piano in Python using libraries such as OpenCV and pyAudio. 
                            The project registered key-presses based on color identification and played music. 
                            The project also had a game-mode similar to "Guitar Hero".
                            </p>
                            <ButtonCus link="https://github.com/sathyahari9/sathyah_15112">
                            </ButtonCus>
                        </div>
                    </Grid>

                </Grid>
                </Fade>
                </div>
                {/* Second row */}
                <div className="row">
                <Fade>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} container spacing={8} className={classes.pad}>
                        <Panel background="https://i.ibb.co/nQhwW01/pingu.png"></Panel>
                    </Grid>
                    <Grid item xs={12} sm={6} container spacing={8} className={classes.pad}>
                        <div className="description">   
                            <h4>
                            Shoppingo
                            </h4>
                            <p>
                            In April 2017, I created a landing page for the Shoppingo mobile app, complete with 
                            a prototype of the app for users to try out. The mobile-view in the center was created completely 
                            using CSS and animations were executed using javascript.
                            </p>
                            <ButtonCus link="https://getshoppingo.com/app">
                            </ButtonCus>
                        </div>
                    </Grid>

                </Grid>
                </Fade>
                </div>
                {/* Third row */}
                <div className="row">
                <Fade>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} container spacing={8} className={classes.pad}>
                        <Panel background="https://i.ibb.co/27crcbN/tedx.png"></Panel>
                    </Grid>
                    <Grid item xs={12} sm={6} container spacing={8} className={classes.pad}>
                        <div className="description">   
                            <h4>
                            TEDxYouth@DPSGurgaon
                            </h4>
                            <p>
                           In October 2017, I organised TEDxYouth@DPSGurgaon. 
                        Along with managing the logistics for the event, I designed the website which included the details of speakers, an 
                        introduction to the event and various aspects of TEDx.
                            </p>
                            <ButtonCus link="https://sathyahari9.github.io/tedxdpsggn">
                            </ButtonCus>
                        </div>
                    </Grid>

                </Grid>
                </Fade>
                </div>
                {/* Fourth row */}
                <div className="row">
                <Fade>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} container spacing={8} className={classes.pad}>
                        <Panel background="https://i.ibb.co/WcPwXHk/iluviapro.png"></Panel>
                    </Grid>
                    <Grid item xs={12} sm={6} container spacing={8} className="pad">
                        <div className="description">   
                            <h4>
                            Iluvia Professional
                            </h4>
                            <p>
                           In May 2018, I helped expand online presence for a shampoo company called Iluvia 
        Professional by creating a website. As the sole developer on the task, I had to 
        ensure that the website was in line with the company's design philophy and brand image. 
                            </p>
                            <ButtonCus link="https://iluviapro.com">
                            </ButtonCus>
                        </div>
                    </Grid>

                </Grid>
                </Fade>
                </div>
                <div className="row">
                <Fade>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} container spacing={8} className={classes.pad}>
                        <Panel background="https://i.ibb.co/vcCyQsm/alpha.png"></Panel>
                    </Grid>
                    <Grid item xs={12} sm={6} container spacing={8} className={classes.pad}>
                        <div className="description">   
                            <h4>
                            Alphanode 2017
                            </h4>
                            <p>
                           In June 2017, I created the website for an inter-school computer symposium held in July 2017. 
         I used Skeleton, simple animation and cards to give a very clean experience.
                            </p>
                            <ButtonCus link="https://sathyahari9.github.io/alphanode" target="_blank">
                            </ButtonCus>
                        </div>
                    </Grid>

                </Grid>
                </Fade>
                </div>

            </React.Fragment>
        );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);