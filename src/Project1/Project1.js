import React,{Component} from 'react';
import './Project1.css';
import ColorPicker from './component/ColorPicker'
import SizeSetting from './component/SizeSetting'
import Result from './component/Result'
import Reset from './component/Reset'


class Project1 extends Component {
    constructor(props){
        super(props);
        this.state={
            color: 'red',
            fontSize: 14
        };
       // this.onSetColor=this.onSetColor.bind(this);
    }
    onSetColor= (params)=> {
        this.setState({
            color:params
        });
    }
    //props giao tiếp giữa thư mục cha và con, từ cha vào con khá đơn giản
    //chỉ cần khai báo từ cha thuộc tính và con gọi this.props.thuocojtinhs đó
    //còn từ con vào cha phải qua hàm vd như project 1 này là hàm con là onReceiveColor
    //và ở cha là onSetColor như ví dụ
    onSetFontSize=(value) =>{
        this.setState({
            fontSize: ((this.state.fontSize+value)>=8 &&(this.state.fontSize+value)<=36)? this.state.fontSize+value : this.state.fontSize
        });
    }
    resetDefault=(value)=>{
        this.setState({
            color: 'red',
            fontSize: 14
        });
    }
    render(){
      return (
        
        <div className="container mt-50">
            
                <div className="row">
                    
                    <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>                   
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">    
                        <SizeSetting fontSize={this.state.fontSize} onReceiveFontSize={this.onSetFontSize}/>
                        <Reset onReceiveDefault={this.resetDefault}/>
                    </div>                                       
                    <Result color={this.state.color} fontSize={this.state.fontSize}/>           
            </div>
                        
        </div>
           
        );
    }
}

export default Project1;
