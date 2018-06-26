import React from 'react'
import { Link } from 'react-router-dom'

import UserService from "../services/UserService";

class LoginPage extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }

        this.usernameChanged = this.usernameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);

        this.userService = UserService.instance;
    }

    usernameChanged(event) {
        this.setState({username: event.target.value})
    }

    passwordChanged(event) {
        this.setState({password: event.target.value})
    }

    login() {
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        this.userService.login(user)
            .then((response) => {
                if (response === null) {
                    alert('invalid login credentials')
                } else {
                    if (response.dtype === 'Customer') {
                        <Link to={`/customer`}></Link>
                    } else if (response.dtype === 'Seller') {
                        <Link to={`/seller`}></Link>
                    }
                    else {
                        <Link to={`/delivery`}></Link>
                    }
                }
            })


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

                <h1>Sign In</h1>

                <form>
                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="usernameFld"
                                   placeholder="Username"
                                   onChange = {this.usernameChanged}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input className="form-control passwordFld"
                                   type="password"
                                   id="passwordFld"
                                   placeholder="Password"
                                   onChange = {this.passwordChanged}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button onClick={() => this.login()}
                                id="loginBtn" type="button" className="btn btn-primary btn-block">Sign in</button>

                            <br></br>
                                {/*<div className="row">*/}
                                    {/*<div className="col-6">*/}
                                        {/*<a href="#">Forgot Password</a>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-6">*/}
                                        {/*<a href="#" className="float-right">Register*/}
                                            {/*Here</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                        </div>
                    </div>



                </form>

            </div>
        )
    }
}
export default LoginPage;