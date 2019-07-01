import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
/*import NavigationBar from './components/navigationbar';*/
import Home from './components/home';
import Blog from './components/blog';
import Contacts from "./components/contacts";
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
            <Route exact path="/home" component={Home}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/underconstruction" component={UnderMaintenance}/>
            <Route exact path="/spinner" component={Spinner}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/contacts" component={Contacts}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
