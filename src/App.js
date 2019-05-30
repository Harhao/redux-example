import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {AuthButton} from './util/AuthButton';
import Public from './views/Public';
import Protected from './views/Protected';
import Login from './views/Login';
import PrivateRoute from './router/PrivateRoute'
class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <AuthButton/>
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Route path="/public" component={Public}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/protected" component={Protected}/>
        </div>
      </Router>
    );
  }
}
export default App;