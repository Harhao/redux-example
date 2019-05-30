import React,{Component} from 'react';
class Index extends Component{
    componentDidMount(){
        console.log("location is",this.props.location);
        console.log("match is",this.props.match);
        console.log("history is",this.props.history);
    }
    render(){
        return (
            <h2>Home</h2>
        )
    }
}
export default Index;