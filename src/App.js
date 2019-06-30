import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
/*import NavigationBar from './components/navigationbar';*/
import Home from './components/home';
import Blog from './components/blog';
import UnderMaintenance from './components/undermaintenance';
import Spinner from './components/spinner';
import Resume from './components/resume';
import './App.css';

class App extends Component {
render(){
  return (
      <div className="App">
      {/* <NavigationBar/>*/}
        <Router>
          <Switch>
            <Route exact path="/" component={UnderMaintenance}/>
            <Route path="/home" component={Home}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/underconstruction" component={UnderMaintenance}/>
            <Route path="/spinner" component={Spinner}/>
            <Route path="/resume" component={Resume}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
