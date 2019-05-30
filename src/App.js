import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Prompt} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import {store} from './redux/index.js';
import Home from './views/Home';
import Topics from './views/Topics';
import About from './views/About';
import Counter from './views/Counter'
import './App.css';
class App extends Component{
  render(){
    const customHistory = createBrowserHistory();
    return (
      <Provider store={store}>
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/app">App</Link></li>
                <li><NavLink to="/topics" activeClassName= "selected">Topics</NavLink></li>
              </ul>
            </nav>
            <Counter/>
            <Prompt when={false} message = {location=>{const isApp = location.pathname.startsWith('/app');return isApp?`你确定要跳转到${location.pathname}吗`:true}}/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/app" component={Home}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
