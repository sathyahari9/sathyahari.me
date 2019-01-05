import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
class ButtonC extends Component{
    render(){
        return(
        <Button type="submit"
                variant="outlined"
                style={block}>
                {this.props.content}
                </Button>
        );
    }
}

export default ButtonC;