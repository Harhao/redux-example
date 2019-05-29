import React,{Component} from 'react';
class Topic extends Component{
    render(){
        return (
            <h2>Requests Param:{this.props.match.params.id}</h2>
        )
    }
}
export default Topic;