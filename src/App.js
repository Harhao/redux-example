import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import {AuthButton} from './util/AuthButton';
import Public from './views/Public';
import Protected from './views/Protected';
import Login from './views/Login';
import PrivateRoute from './router/PrivateRoute';
import NoMatch from './views/NoMatch';
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
            <Switch>
              <Route path="/public" component={Public} exact/>
              <Route path="/login" component={Login} exact/>
              <PrivateRoute path="/protected" component={Protected} exact/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
      </Router>
    );
  }
}
export default App;