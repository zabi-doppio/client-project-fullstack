import React, { Component } from 'react'
import axios from 'axios'


class ClientDetail extends Component {
    state={
        client:''
    }

componentDidMount(){
    const id = this.props.location.myCustomProps
    axios.get(`http://localhost:9000/api/clients/${id}`)
    .then(res=>{
        this.setState({
client:res.data
        })
    
    })
}
    render() {
       const {client} = this.state;
       console.log(client);
        return (
            <div>
                <h1>
                    {client.name}
                </h1>
            </div>
        )
    }
}
export default ClientDetail
