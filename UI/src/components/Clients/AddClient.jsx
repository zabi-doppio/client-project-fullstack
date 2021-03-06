import React, { Component } from 'react';
import {Button} from 'reactstrap';
import axios from 'axios';
class AddClient extends Component {
    state={
        companyName:'',
        type:0,
        typePrice:0,
        partitaIva:'',
        codiceFiscale:'',
        name:'',
        surname:'',
        address:'',
        city:'',
        zip:0,
        state:'',
        country:'',
        phone:0,
        email:'',
        domains:[''],
        notes:''

    }



    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
const {companyName,type,typePrice,
        partitaIva,codiceFiscale,name,
        surname,address,city,zip,
        state,country,phone,email,
       notes} = this.state;
        const newClient = {
           companyName,type,typePrice,
           partitaIva,codiceFiscale,name,
           surname,address,city,zip,
           state,country,phone,email,
           domains:[...this.state.domains]
           ,notes
        }
        axios.post('http://localhost:9000/api/clients',newClient)
        .then(res=>{
            console.log(res.data)
            this.props.history.push('/clients')
        })
        
    }


    render() {
        return (
            <div>
                <div style={{
                    opacity: "0.7",
                    
                }}>

                    <form onSubmit={this.handleSubmit}>
                        <h3 className="text-center">Add a New Client</h3>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                            <div className="form-group">
                            <label>Comapny Name</label>
                            <input name="companyName" onChange={this.handleChange} type="text" className="form-control" placeholder="Enter Company Name" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="FormControlSelect">Type</label>
                            <select onChange={this.handleChange} name='type' className="form-control" id="FormControlSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            </select>
                        </div>
                        </div>
                         </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                            <label htmlFor="FormControlSelect">Payment Type</label>
                            <select onChange={this.handleChange} name='typePrice' className="form-control" id="FormControlSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            </select>
                                </div>
                        </div>
                            <div className="col-md-6">
                                 <div className="form-group">
                            <label>Partita Iva</label>
                            <input name="partitaIva" onChange={this.handleChange} type="text" className="form-control" placeholder="Enter Partita Iva" />
                        </div>
                      </div>
                    </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                            <label>Codice Fiscale</label>
                            <input name="codiceFiscale" onChange={this.handleChange} type="text" className="form-control" placeholder="Enter Codice Fiscale" />
                        </div>
                         </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Name</label>
                            <input name="name" onChange={this.handleChange} type="text" className="form-control" placeholder="Enter Name" />
                        </div>
                     </div>
                     </div>
                     <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                            <label>SurName</label>
                            <input name="surname" onChange={this.handleChange} type="text" className="form-control" placeholder="Enter Sur Name" />
                        </div>
                      </div>
                     <div className="col-md-6">
                    <div className="form-group">
                            <label>Address</label>
                            <input name="address" onChange={this.handleChange} type="text" className="form-control" placeholder="Enter Address" />
                        </div>
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-md-6">
                        <div className="form-group">
                            <label>City</label>
                            <input name="city" onChange={this.handleChange} type="text" className="form-control" placeholder="Enter City" />
                        </div>
                     </div>
                        <div className="col-md-6">
                         <div className="form-group">
                            <label>Zip</label>
                            <input name="zip" onChange={this.handleChange} type="zip" className="form-control" placeholder="Enter Zip Code" />
                        </div>
                         </div>
                         </div>
                    <div className="row">
                 <div className="col-md-6">
                    <div className="form-group">
                            <label>State</label>
                            <input name="state" onChange={this.handleChange} type="text" className="form-control" placeholder="Enter State" />
                        </div>
                    </div>
                    <div className="col-md-6">
                     <div className="form-group">
                            <label>Country</label>
                            <input name="country" onChange={this.handleChange} type="text" className="form-control" placeholder="Enter Country" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                     <div className="col-md-6">
   
                      <div className="form-group">
                            <label>Phone Number</label>
                            <input name="phone" onChange={this.handleChange} type="phone" className="form-control" placeholder="Enter Phone Number" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" onChange={this.handleChange} type="text" className="form-control" placeholder="Enter Country" />
                        </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                    <div className="form-group">
                            <label>Domains</label>
                            <input name="domains" onChange={this.handleChange} type="text" className="form-control" placeholder="Enter Country" />
                        </div>
                        </div>
                        <div className="col-md-6">
    
                        <div className="form-group">
                            <label htmlFor="FormControlTextarea">Notes</label>
                            <textarea onChange={this.handleChange} name="notes" className="form-control" id="FormControlTextarea" placeholder="Enter your Note" rows="3"></textarea>
                        </div>
                         </div>
                        </div>
                            </div>
                       <div className="row justify-content-center">
                        <Button  type="submit" size="lg" outline color="primary mt-1 mb-1">Submit</Button>
                        </div>
                        </form>
                </div>
            </div>
        )
    }
}
export default AddClient;