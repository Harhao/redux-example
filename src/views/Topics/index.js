import React,{Component} from "react";
import {Link,Route} from 'react-router-dom';
import Topic from './Topic';
class Topics extends Component{
    render(){
        console.log(this.props.location);
        console.log(this.props.match);
        console.log(this.props.history);
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>
                <Route path={`${this.props.match.path}/:id`} component={Topic}/>
                <Route exact path={this.props.match.path} render={()=><h3>Please select a topics</h3>}/>
            </div>
        )
    }
}
export default Topics;