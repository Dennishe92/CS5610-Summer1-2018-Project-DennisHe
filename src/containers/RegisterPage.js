import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';

import UserService from '../services/UserService'

class RegisterPage extends React.Component {
    constructor() {
        super();

        this.state = {
            username: 'default',
            password: 'default',
            firstName: 'default',
            lastName: 'default',
            verifyPassword: 'default',
            userType: 'Customer'
        }

        this.userTypeChanged = this.userTypeChanged.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.firstNameChanged = this.firstNameChanged.bind(this);
        this.lastNameChanged = this.lastNameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.verifyPasswordChanged = this.verifyPasswordChanged.bind(this);
        this.createUser = this.createUser.bind(this);

        this.userService = UserService.instance;

    }

    userTypeChanged(event) {
        this.setState({userType: event.target.value})
    }

    usernameChanged(event) {
        this.setState({username: event.target.value})
    }

    firstNameChanged(event) {
        this.setState({firstName: event.target.value})
    }

    lastNameChanged(event) {
        this.setState({lastName: event.target.value})
    }

    passwordChanged(event) {
        this.setState({password: event.target.value})
    }

    verifyPasswordChanged(event) {
        this.setState({verifyPassword: event.target.value})
    }

    createUser() {
        if (this.state.password !== this.state.verifyPassword) {
            alert("Please make sure password matches")
        } else {
            const user = {
                username: this.state.username,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                password: this.state.password
            }
            this.userService.createUser(this.state.userType, user)
                .then((response) => {
                    if (response === null) {
                        alert("Username already exist. please choose another one.")
                    } else {
                        alert("Account created successfully!")
                        this.props.history.push('/login');
                    }
                })
        }
    }

    render() {
        return (
            <div className="container-fluid">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="http://localhost:3000/home">CookMi</a>
                    <button type="button"
                            className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/search">Search<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">My Profile<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Groceries<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/login">Login<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/register">Register<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <br/>

                <h1>Register</h1>

                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">User Type</label>
                        <div className="col-sm-10">
                        <select className="form-control"
                        onChange = {this.userTypeChanged}>
                            <option value="Customer">Customer</option>
                            <option value="Seller">Seller</option>
                            <option value="Delivery">Delivery Personnel</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   onChange = {this.usernameChanged}
                                   id="usernameFld"
                                   placeholder="Username"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   onChange = {this.firstNameChanged}
                                   placeholder="First Name"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   onChange = {this.lastNameChanged}
                                   placeholder="Last Name"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control"
                                   onChange = {this.passwordChanged}
                                   id="passwordFld"
                                   placeholder="Password"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="verifyPasswordFld" className="col-sm-2 col-form-label">Verify Password</label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control"
                                   onChange = {this.verifyPasswordChanged}
                                   id="verifyPasswordFld"
                                   placeholder="Verify Password"></input>
                        </div>
                    </div>
                </form>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button id="registerBtn"
                                type="button"
                                className="btn btn-info btn-block"
                                onClick={this.createUser}
                        >Register</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default RegisterPage;