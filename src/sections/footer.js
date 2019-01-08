import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const flex = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
}
class Footer extends Component{
    render(){
        return(
            <div className="row grey footer">
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={2} container spacing={12} style={flex}>
                    Made with love in India
                    </Grid>
                    <Grid item xs={12} sm={8} container spacing={12} style={flex}>
                    <a className="social" href="https://facebook.com/thesathyahari"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                    <a className="social" href="https://github.com/sathyahari9"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                    <a className="social" href="https://linkedin.com/in/sathyahari9"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                    <a className="social" href="https://dribbble.com/sathyahari9"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
                    </Grid>
                    <Grid item xs={12} sm={2} container spacing={12} style={flex}>
                    <a className="lev" href="https://github.com/sathyahari9/sathyahari.me">
                    View source
                    </a>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Footer;