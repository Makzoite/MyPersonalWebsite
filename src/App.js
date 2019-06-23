import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import NavigationBar from './components/navigationbar';
import Home from './components/home';
import UnderMaintenance from './components/undermaintenance';
import './App.css';

class App extends Component {
render(){
  return (
      <div className="App">
      {/* <NavigationBar/>*/}
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
