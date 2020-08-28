import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Import Components
import Section from './section';
import OwnerLogin from './components/Owner/OwnerLogin';
import OwnerHome from './components/Owner/OwnerHome';
import UserLogin from './components/User/UserLogin';
import ManagerLogin from './components/Manager/ManagerLogin';

class App extends React.Component{
  render(){
    return(
      <div className="app">
        <Switch>
            <Route exact path="/" component={Section}/>
            <Route path="/ownerLogin" component={OwnerLogin}/>
            <Route path="/ownerHome" component={OwnerHome}/>
            <Route path="/userLogin" component={UserLogin}/>
            <Route path="/managerLogin" component={ManagerLogin}/>
        </Switch>
      </div>
    )
  }
}

export default App;
