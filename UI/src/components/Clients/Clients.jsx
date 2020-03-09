import React, { Component } from 'react'
import axios from 'axios'
import { Pagination, PaginationItem, PaginationLink, Table,Button } from "reactstrap";
import {Link} from 'react-router-dom';
export default class Clients extends Component {



    constructor() {

        super();

        // create data set of random length
        // this.dataSet = [...Array(Math.ceil(500 + Math.random() * 500))].map(
        //     (a, i) => "Record " + (i + 1)
        // );

        // // this.pageSize = 1;
        // this.pagesCount = Math.ceil(this.dataSet.length / this.pageSize);

        this.state = {
            currentPage: 0,
            clients: [],
            pageSize: 5
        };

    }

    componentDidMount() {
        axios.get('http://localhost:9000/api/clients')
            .then(res => {
                const clients = res.data;
                this.setState({
                    clients

                })

            })
    }

    handleClick(e, index) {

        e.preventDefault();

        this.setState({
            currentPage: index
        });

    }

    render() {

        const { currentPage } = this.state;
        const { clients } = this.state;
        const pagesCount = Math.ceil(clients.length / this.state.pageSize);
        console.log('clients', clients.length)
        return (

            <React.Fragment>
<div style={{
    float:'right',
    marginRight:'1rem'
}}>
    <Button  size="md" outline color="primary mt-1 mb-1">
    <Link to='/add-client' className="addLink" style={{
        textDecoration:'none'
    }}>Add Client</Link>
    </Button>
                   
                </div>
                <Table className='bg-transparent  text-black text-capitalize' >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Company</th>
                            <th >Type</th>
                            <th>Payment</th>
                            <th>P.Iva</th>
                            <th >C.F</th>
                            <th>Name</th>
                            <th>SurName</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Zip</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Phone</th>
                            <th>emails</th>
                            <th>Domains</th>
                            <th >Notes</th>
                            <th></th>


                        </tr>
                    </thead>
                    <tbody>
                        {clients
                            .slice(
                                currentPage * this.state.pageSize,
                                (currentPage + 1) * this.state.pageSize
                            )
                            .map((data, i) => {
                                return <tr className="data-slice" key={i}>
                                    <th >{i}</th>
                                    <td>{data.companyName}</td>
                                    <td>{data.type}</td>
                                    <td>{data.typePrice}</td>
                                    <td>{data.partitaIva}</td>
                                    <td>{data.codiceFiscale}</td>
                                    <td>{data.name}</td>
                                    <td>{data.surname}</td>
                                    <td>{data.address}</td>
                                    <td>{data.city}</td>
                                    <td>{data.zip}</td>
                                    <td>{data.state}</td>
                                    <td>{data.country}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.email}</td>
                                    <td>{data.domains[0], data.domains[1], data.domains[2]}</td>
                                    <td>
                                        <p>
                                            {data.notes.substr(0, 5)}
                                        </p>

                                    </td>
                                    <td>
                                    <Button  size="md" outline color="success mr-1">
                                             <Link

                                              to={{
                                                pathname: `/projects/` + data._id,
                                                myCustomProps: this.props.proj   
                                              }}
                                              
                                              className="addLink text-success" style={{
                                            textDecoration:'none',
                                           
                                        }}>View
                                        </Link>
                                        </Button>
                                        <Button  size="md" outline color="warning mr-1">
                                             <Link to='/update-client' className="addLink text-warning" style={{
                                            textDecoration:'none',
                                           
                                        }}>Update</Link>
                                        </Button>
                                       <Button outline className='mr-1' color="danger" onClick={
                                            ()=>{
                                                console.log('Delete has been clicked')
                                            }
                                        }>
                                           x
                                       </Button>
                                    </td>

                                </tr>
                            }






                            )}
                    </tbody>
                </Table>
                


                <div className="pagination-wrapper mt-4" style={{
                    marginBottom: "-10px"
                }}>

                    <Pagination aria-label="Page navigation">

                        <PaginationItem disabled={currentPage <= 0}>

                            <PaginationLink
                                onClick={e => this.handleClick(e, currentPage - 1)}
                                previous
                                href="#"
                            />

                        </PaginationItem>

                        {[...Array(pagesCount)].map((page, i) =>
                            <PaginationItem active={i === currentPage} key={i}>
                                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        <PaginationItem disabled={currentPage >= pagesCount - 1}>

                            <PaginationLink
                                onClick={e => this.handleClick(e, currentPage + 1)}
                                next
                                href="#"
                            />

                        </PaginationItem>

                    </Pagination>

                </div>



            </React.Fragment>

        );

    }

}