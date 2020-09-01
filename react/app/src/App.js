import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Import Components
import Section from './section';
import OwnerLogin from './components/Owner/OwnerLogin';
import OwnerHome from './components/Owner/OwnerHome';
import MenuEdit from './components/Owner/MenuEdit';
import UserLogin from './components/User/UserLogin';
import ManagerLogin from './components/Manager/ManagerLogin';
import MOwnerBoard from './components/Manager/MOwnerBoard';
import MUserBoard from './components/Manager/MUserBoard';

class App extends React.Component{
  render(){
    return(
      <div className="app">
        <Switch>
            <Route exact path="/" component={Section}/>
            <Route path="/ownerLogin" component={OwnerLogin}/>
            <Route path="/ownerHome" component={OwnerHome}/>
            <Route path="/menuEdit" component={MenuEdit}/>
            <Route path="/userLogin" component={UserLogin}/>
            <Route path="/managerLogin" component={ManagerLogin}/>
            <Route path="/mOwnerBoard" component={MOwnerBoard}/>
            <Route path="/mUserBoard" component={MUserBoard}/>
        </Switch>
      </div>
    )
  }
}

export default App;
