import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ButtonCus extends Component{
    render(){
        return(
            <a class="buttoncus" href={this.props.link}>
            <FontAwesomeIcon icon="link"/><span>View Project</span>
            </a>
        );
    }
}

export default ButtonCus;