import React from 'react'

import UserService from '../services/UserService'
import OrderService from '../services/OrderService'

class GroceryItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            address: ''
        }

        this.userService = UserService.instance;
        this.orderService = OrderService.instance;
    }

    addressChanged(event) {
        this.setState({address: event.target.value})
    }

    createOrder() {
        var order = {
            address: this.state.address
        };
        this.orderService.createOrder(order);
    }


    render() {
        return (
            <tr>
                <td>{this.props.grocery.name}</td>
                <td>{this.props.grocery.sellerName}</td>
                <td>{this.props.grocery.price}</td>
                <td>
                    <input placeholder="Enter Address"
                           onChange={this.addressChanged}>

                    </input>
                </td>
                <td><button onClick={() => this.createOrder()}
                            className="btn btn-success">Place Order</button></td>
            </tr>
        )
    }



}
export default GroceryItem