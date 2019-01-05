import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';
import toastr from 'toastr';
import * as emailjs from 'emailjs-com';
import 'jquery';

const textfield = {
    width:"100%",
    margin:"auto",
    marginTop:"20px",
};
const block = {
    display:'block',
    border: 'none',
    borderRadius: '40px',
    background: '#86D0F7',
    color: '#fff',
    fontSize: '1.2em',
    padding: '15px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
    marginTop: 20
}
const pad = {
    padding: '3em'
}
const center = {
    position: 'relative',
    textAlign:'center',
    margin: 'auto'
}
const disb = {
    fontSize: '1.5em',
    fontFamily: 'Avenir',
}
class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        document.title = 'Contact'
    }
    updateField(field,value){
        this.setState({[field]:value});
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        var template_params = {
        "from_name": this.name + ' ('+ this.state.email + ')',
        "to_name": "sathyahari9@gmail.com",
        "message_html": this.state.message
        }

        var service_id = "default_service";
        var template_id = "template_deywgrC3";
        emailjs.send(service_id,template_id,template_params,"user_hIpng3P3Zh4dntVWCLWiR")
        .then(function(response){
            toastr.success('Message Sent!');
        },
        function(err){
            toastr.error(err);
        });
    }
    render(){
    return(
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12} container spacing={12}>
                <Fade>
                    <div className="contact-c">
                        <h3>Let's talk</h3>
                        <p>
                            Want to work on something cool together?
                            
                            Drop me a line at <a href="mailto:sathyah@andrew.cmu.edu" className="under">sathyah@andrew.cmu.edu</a> with opportunities/ projects.
                        </p>
                    </div>
                </Fade>
                </Grid>
                <Grid item xs={12} sm={12} container spacing={12} style={pad}>
                <Fade>
                    <div style={center}>
                        <form onSubmit = {this.handleSubmit} className="form-m">
                        <Grid item xs={12} sm={12} container spacing={12}>
                            <TextField  
                                style={textfield} 
                                type="name"
                                name="name"
                                label="Name"
                                variant="outlined"
                                value={this.state.name}
                                onChange={(event) => this.updateField('name',event.target.value)}
                            >

                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} container spacing={12}>
                            <TextField 
                                id="outlined-email-input"
                                label="Email"
                                name="email"
                                style={textfield}
                                variant="outlined"
                                value={this.state.email}
                                onChange={(event) => this.updateField('email',event.target.value)}
                            >
                            
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} container spacing={12}>
                            <TextField
                                id="standard-multiline-static"
                                label="Message"
                                multiline
                                rows="4"
                                defaultValue="Write me a message"
                                style={textfield}
                                margin="normal"
                                variant="outlined"
                                name="message"
                                value={this.state.message}
                                onChange={(event) => this.updateField('message',event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} container spacing={12}>
                        <Button
                                onClick={this.handleSubmit}
                                variant="outlined"
                                style={block}
                                name="submit">
                                <FontAwesomeIcon icon="paper-plane" />
                                </Button>
                        </Grid>
                        </form>
                    </div>
                </Fade>
                </Grid>
            </Grid>
    );
    }
}
export default Contact;