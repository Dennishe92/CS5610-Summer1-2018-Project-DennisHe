import React from 'react'
import UserService from "../services/UserService";
import OrderItem from "../components/OrderItem"

class DeliveryProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 3,
            delivery: {
                username: 'batman',
                email: '',
                phone: '',
                address: ''},
            orders:[]
        }

        this.deliveryProfileService = UserService.instance;
        this.updateDelivery = this.updateDelivery.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.addressChanged = this.addressChanged.bind(this);
        this.renderOrderList = this.renderOrderList.bind(this);
        this.findUser = this.findUser.bind(this);
        this.findAllOrders = this.findAllOrders.bind(this);
    };

    componentDidMount() {
        this.findUser();
        this.findAllOrders();
    }

    findUser() {
        this.deliveryProfileService.findUserByUsername('batman')
            .then((user) => {
                this.setState({delivery: user});
                // this.render();
            });
    }

    findAllOrders() {
        this.deliveryProfileService.findOrdersByDelivery(this.state.userId)
            .then((orders) => {
                this.setState({orders: orders});
                // this.render();
            })
    }

    updateDelivery() {
        this.deliveryProfileService.updateUser(this.state.userId, this.state.delivery)
            .then((user) => {this.findUser(user.username);});
    }

    usernameChanged(event) {
        console.log(event.target.value);
        this.setState({delivery: {username: event.target.value}
        });
    }

    emailChanged() {

    }

    phoneChanged() {

    }

    addressChanged() {

    }

    renderOrderList() {
        let orders = null;

        if (this.state) {
            // console.log(this.state.orders.length);
            orders = this.state.orders.map(
                (order) => {return <OrderItem key={order.id} order={order}/>}
            )
        }

        return (orders);
    }

    render() {
        console.log(this.state.delivery);
        return <div className="container-fluid">

            <form>
                <div className="form-group row">
                    <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input onChange={this.usernameChanged}
                               className="form-control"
                               id="usernameFld"
                               value={this.state.delivery.username}
                               placeholder="username"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Email </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-password-fld"
                               id="emailFld" placeholder={this.state.delivery.email}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Phone </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-password-fld" id="phoneFld"
                               placeholder={this.state.delivery.phone}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Address </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-password-fld" id="addressFld"
                               placeholder={this.state.delivery.address}/>
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
                <h1>Order List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Rating</th>
                        <th scope='col'>Url</th>
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