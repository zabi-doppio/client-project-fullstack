import React, { Component } from 'react';
import {Button} from 'reactstrap';
class UpdateClient extends Component {
    state={
        companyName:'',
        type:0,
        payment:0,
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
        domains:[],
        notes:''

    }
    render() {
        return (
            <div>
                <div style={{
                    opacity: "0.7",
                    
                }}>

                    <form onSubmit={this.handleSubmit}>
                        <h3 className="text-center">Edit Client</h3>
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
                            <select name='type' className="form-control" id="FormControlSelect">
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
                            <select name='payment' className="form-control" id="FormControlSelect">
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
                            <textarea name="notes" className="form-control" id="FormControlTextarea" rows="3" placeholder="Enter Your Note here
                            "></textarea>
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
export default UpdateClient;