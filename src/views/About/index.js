import React,{Component} from 'react';
class About extends Component{
    render(){
        console.log(this.props.history);
        return (
            <h2>About</h2>
        )
    }
}
export default About;