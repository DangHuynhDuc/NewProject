import React,{Component} from 'react';

class Reset extends Component {
    onDefault=()=>{
        this.props.onReceiveDefault();
    }
    render(){
        return (
            
            <button type="button" className="btn btn-primary" onClick={this.onDefault}>reset</button>
            
        );
    }
}

export default Reset;
