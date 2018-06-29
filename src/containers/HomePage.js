import React from 'react'
import UserService from '../services/UserService'
import { withRouter } from 'react-router';

class HomePage extends React.Component {
    constructor() {
        super();

        this.userService = UserService.instance;
    }

    checkLoginForGrocery() {
        this.userService.checkLogin()
            .then((response) => {
                if (response.status === 409) {
                    alert("Please login first.")
                    this.props.history.push('/login');
                } else {
                    this.userService.findCurrentUser()
                        .then((user) => {
                            if (user.role !== 'Customer') {
                                alert("You must be a customer to buy groceries")
                            } else {
                                this.props.history.push('/grocery');
                            }
                        })
                }
            })
    }

    checkLoginForFollow() {
        this.userService.checkLogin()
            .then((response) => {
                if (response.status === 409) {
                    alert("Please login first.")
                    this.props.history.push('/login');
                } else {
                    this.userService.findCurrentUser()
                        .then((user) => {
                            if (user.role !== 'Customer') {
                                alert("You must be a customer to follow sellers")
                            } else {
                                this.props.history.push('/sellerpage');
                            }
                        })
                }
            })
    }

    checkLoginForLogin() {
        this.userService.findCurrentUser()
            .then((user) => {
                if (user !== null) {
                    alert("You're already logged in")
                } else {
                    this.props.history.push('/login');
                }
            })
    }

    checkLoginForLogout() {
        this.userService.checkLogin()
            .then((response) => {
                if (response.status === 409) {
                    alert("You are not logged in");
                } else {
                    this.userService.logout()
                        .then((response) => {
                            if (response === null) {
                                alert("You successfully logged out")
                                this.props.history.push('/home');
                            }
                        })

                }
            })
    }

    checkLoginForProfile() {
        this.userService.checkLogin()
            .then((response) => {
                if (response.status === 409) {
                    alert("You need to login first");
                    this.props.history.push('/login');
                }
                else {
                    this.userService.findCurrentUser()
                        .then((user) => {
                            if (user === null) {
                                alert("You need to login first")
                                this.props.history.push('/login');
                            }
                            if (user.role === 'Customer') {
                                this.props.history.push('/customer');
                            }
                            if (user.role === 'Seller') {
                                this.props.history.push('/seller');
                            }
                            if (user.role === 'Delivery') {
                                this.props.history.push('/delivery')
                            }
                        })
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
                                <a className="nav-link" href="#" onClick={() => this.checkLoginForProfile()}>Profile<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={() => this.checkLoginForFollow()}>FollowSellers<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={() => this.checkLoginForGrocery()}>Groceries<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={() => this.checkLoginForLogin()}>Login<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={() => this.checkLoginForLogout()}>Logout<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/register">Register<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <br/>

                <div className="jumbotron container-fluid">
                    <h1 className="display-4">Welcome to CookMi :)</h1>
                    <p className="lead">We are the leading platform to discover different food recipes to expand your
                        palate. Here on CookMi, we can make your cooking from impossible to possible.</p>
                    <hr className="my-4"></hr>
                    <p>We utilize the Yummly API to provide you with vast amount of food recipes just at your finger
                        tips.</p>
                    <a className="btn btn-primary btn-lg" href="http://localhost:3000/search" role="button">Start Searching</a>
                </div>

            </div>
        )
    }
}
export default HomePage