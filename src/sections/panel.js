import React, {Component} from 'react';

class Panel extends Component{
    render(){
        const style = {
            backgroundImage: 'url('+this.props.background+')',
            backgroundSize:"cover",
        }
        return(
            <div className="panel" style={style}>
                <div></div>
            </div>
        );
}
}
export default Panel;