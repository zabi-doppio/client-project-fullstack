import React from 'react';
import NavBar from './Navigation/Nav.jsx';
import {Switch,Route} from 'react-router-dom';
import Login from './Auth/Login.jsx';
import Register from './Auth/Register.jsx';
import Clients from './Clients/Clients.jsx';


export default class App extends React.Component{
  
    render(){
        return(
            <React.Fragment>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/clients" component={Clients}/>
                </Switch>
                
            </React.Fragment>
        )
    }
}