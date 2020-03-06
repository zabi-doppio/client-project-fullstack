import React from 'react';
import NavBar from './Navigation/Nav.jsx';
import {Switch,Route} from 'react-router-dom';
import Login from './Auth/Login.jsx';

export default class App extends React.Component{
  
    render(){
        return(
            <React.Fragment>
                <NavBar/>
                <Route exact to="/" component={Login}/>
            </React.Fragment>
        )
    }
}