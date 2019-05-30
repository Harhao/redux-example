import React,{Component} from 'react';
export default class Public extends Component{
    jump = ()=>{
        this.props.history.push('protected')
    }
    render(){
        return(
            <h3>
                Public
                <button onClick={this.jump}>click</button>
            </h3>
        );
    }
}