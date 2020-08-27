import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Import Components
import Login from './components/Login'
import OwnerHome from './components/OwnerHome';

class App extends React.Component{
  render(){
    return(
      <div className="app">
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/ownerHome" component={OwnerHome}/>
        </Switch>
      </div>
    )
  }
}

export default App;
