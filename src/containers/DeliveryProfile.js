import React from 'react'
import UserService from "../services/UserService";
import OrderItem from "../components/OrderItem"

class DeliveryProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 3,
            username: '',
            email: '',
            phone: '',
            address: '',
            orders:[]
        }

        this.userService = UserService.instance;
        this.updateDelivery = this.updateDelivery.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.phoneChanged = this.phoneChanged.bind(this);
        this.addressChanged = this.addressChanged.bind(this);
        this.renderOrderList = this.renderOrderList.bind(this);
        this.findUser = this.findUser.bind(this);
    };

    componentDidMount() {
        this.findUser();
    }

    findUser() {
        this.userService.populateProfile()
            .then((user) => {
                this.setState({userId: user.id});
                this.setState({username: user.username});
                this.setState({email: user.email});
                this.setState({phone: user.phone});
                this.setState({address: user.address});
            })
            .then(() => {
                this.userService.findAllOrders()
                    .then((orders) => {
                        this.setState({orders: orders});
                    })
            })
    }

    updateDelivery() {
        var delivery = {
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address
        }
        this.userService.updateUser(this.state.userId, delivery)
            .then(this.findUser);
    }

    usernameChanged(event) {
        this.setState({username: event.target.value});
    }

    emailChanged(event) {
        this.setState({email: event.target.value});
    }

    phoneChanged(event) {
        this.setState({phone: event.target.value});
    }

    addressChanged(event) {
        this.setState({address: event.target.value});
    }

    renderOrderList() {
        let orders = null;
        if (this.state) {
            orders = this.state.orders.map(
                (order) => {return <OrderItem key={order.id} order={order}/>}
            )
        }
        return (orders);
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
        return <div className="container-fluid">

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
            <br/>

            <form>
                <div className="form-group row">
                    <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input onChange={this.usernameChanged}
                               className="form-control"
                               id="usernameFld"
                               value={this.state.username}
                               placeholder="username"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Email </label>
                    <div className="col-sm-10">
                        <input onChange={this.emailChanged}
                               className="form-control wbdv-password-fld"
                               id="passwordFld"
                               value={this.state.email}
                               placeholder="Email"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="phoneFld" className="col-sm-2 col-form-label">
                        Phone </label>
                    <div className="col-sm-10">
                        <input onChange={this.phoneChanged}
                               className="form-control wbdv-password-fld"
                               id="phoneFld"
                               value={this.state.phone}
                               placeholder="Phone"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="addressFld" className="col-sm-2 col-form-label">
                        Address </label>
                    <div className="col-sm-10">
                        <input onChange={this.addressChanged}
                               className="form-control wbdv-password-fld"
                               id="addressFld"
                               value={this.state.address}
                               placeholder='Address'/>
                    </div>
                </div>

                <div className="form-group row">

                    <label className="col-sm-2 col-form-label"/>
                    <div className="col-sm-10">
                        <button onClick={this.updateDelivery}
                                id="updateBtn"
                                type="button"
                                className="btn btn-primary btn-block">Update
                        </button>
                        <br/>
                    </div>
                </div>
            </form>

            <div>
                <h1>Orders To Deliver</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Delivery Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderOrderList()}
                    </tbody>
                </table>
            </div>
        </div>
    }
}
export default DeliveryProfile