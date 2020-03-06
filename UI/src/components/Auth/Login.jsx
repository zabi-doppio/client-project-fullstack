import React, { Component } from 'react'

export default class Login extends Component {


//   handleChange = (e) => {
//         console.log(e.target.value)
//     }
    render() {
        return (
            <div className="auth-wrapper" style={{
                marginTop: "6.1rem",
                marginBottom: "3.5rem",


            }} >
                <div className="auth-inner" style={{
                    opacity: "0.7"
                }}>
                    <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </div>
            </div>

        )
    }
}