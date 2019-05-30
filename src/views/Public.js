import React,{Component} from 'react';
import PropTypes from 'prop-types';
export default class Public extends Component{
    static contextTypes = {
        router:PropTypes.object
    }
    constructor(props,context){
        super(props,context);
    }
    jump = ()=>{
        // this.props.history.push('protected')
        this.context.router.history.push('protected');
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