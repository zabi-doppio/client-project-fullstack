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
    
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12"> 
                    <div className="text-center">
                         <h1 className="text-center">Company Name:{client.companyName}</h1>
                    </div>
                       
                    </div>
                
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Client-Type:{client.type}</h3>
                    </div>
                    <div className="col-md-6">
        <h3 className="text-center">Payment-Type:{client.typePrice}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Patita Iva:{client.partitaIva}</h3>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-center">Codice Fiscale:{client.codiceFiscale}</h3>
                    </div>
                </div>
                <div className="row">
                   <div className="col-md-6">
                    <h3 className="text-center">Name:{client.name}</h3>
                    </div>
                    <div className="col-md-6">
                        <h3>Sur-Name:{client.surname}</h3>
                    </div>
                </div>
                <div className="row">
                   
                    <div className="col-md-6">
                        <h3>State:{client.state}</h3>
                    </div>
                    <div className="col-md-6">
        <h3 className="text-center">Address:{client.address}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>City:{client.city}</h3>
                    </div>
                    <div className="col-md-6">
        <h3 className="text-center">Zip:{client.zip}</h3>
                    </div>
                </div>
               
                    
              
                <div className="row">
                    <div className="col-md-6">
                        <h3>Country:{client.country}</h3>
                    </div>
                    <div className="col-md-6">
        <h3 className="text-center">Phone:{client.phone}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Email:{client.email}</h3>
                    </div>
                    <div className="col-md-6">
        <h3 className="text-center">Domains:{client.domains}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Notes:{client.notes}</h3>
                    </div>
                   
                </div>

            </div>
        )
    }
}
export default ClientDetail
