import React, { Component } from 'react'
import axios from 'axios'

export default class Clients extends Component {
    state = {
        clients:''
    }
    componentDidMount(){
        axios.get('http://localhost:9000/api/clients')
        .then(res=>{
            this.setState({
                clients:res.data
            })
            
           
        })
    }
    render() {
        const clientsList = this.state.clients;
        console.log(clientsList)
        return (
            <div>
                <h1>Welcome to the Client Page</h1>
            </div>
        )
    }
}
