import React,{Component} from 'react';
import {connect} from 'react-redux';
import {INCREMENT,DECREMENT} from '../../redux/actions.js';
class Counter extends Component{
    increment = ()=>{
        this.props.dispatch({
            type:INCREMENT
        })
    }
    decrement = ()=>{
        this.props.dispatch({
            type:DECREMENT
        })
    }
    render(){
        console.log("#######",this.props);
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        count:state.count
    }
}
export default connect(mapStateToProps)(Counter);