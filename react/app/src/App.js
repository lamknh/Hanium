import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Import Components
import OwnerLogin from './components/Owner/OwnerLogin'
import OwnerHome from './components/Owner/OwnerHome';

class App extends React.Component{
  render(){
    return(
      <div className="app">
        <Switch>
            <Route exact path="/" component={OwnerLogin}/>
            <Route path="/ownerHome" component={OwnerHome}/>
        </Switch>
      </div>
    )
  }
}

export default App;
