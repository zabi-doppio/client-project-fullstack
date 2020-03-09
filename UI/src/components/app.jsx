import React from 'react';
import NavBar from './Navigation/Nav.jsx';
import {Switch,Route, Redirect} from 'react-router-dom';
import Login from './Auth/Login.jsx';
import Register from './Auth/Register.jsx';
import Clients from './Clients/Clients.jsx';
import Privateroute from './Auth/PrivateRoute.jsx';
import PublicRoute from './Auth/PublicRoute.jsx';
import BackGround from '../img/background.svg';
import Page404 from './Utils/Page404.jsx';


export default class App extends React.Component{
    render(){
        
        return(
            <div
        style={{
            backgroundImage: `url(${BackGround})`,
                height: '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
        }}
            >
                <NavBar />
                <Switch>
                    <PublicRoute  restricted={true} exact path="/" component={Login}/>
                    <PublicRoute restricted={true} exact path="/register" component={Register}/>
                    <Privateroute exact path="/clients" component={Clients}/>
                    <Route path="" component={Page404} />
                </Switch>
                
            </div>
        )
    }
}