import React from 'react'

import OrderService from '../services/OrderService'

class GroceryItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            address: ''
        };

        this.firstNameChanged = this.firstNameChanged.bind(this);
        this.lastNameChanged = this.lastNameChanged.bind(this);
        this.addressChanged = this.addressChanged.bind(this);

        this.orderService = OrderService.instance;
    }

    firstNameChanged(event) {
        this.setState({firstName: event.target.value})
    }

    lastNameChanged(event) {
        this.setState({lastName: event.target.value})
    }

    addressChanged(event) {
        this.setState({address: event.target.value})
    }

    createOrder() {
        var order = {
            customerFirstName: this.state.firstName,
            customerLastName: this.state.lastName,
            address: this.state.address
        };
        console.log(order);
        this.orderService.createOrder(order)
            .then(alert("orderPlaced"))
        window.location.reload();
    }


    render() {
        return (
            <tr>
                <td>{this.props.grocery.name}</td>
                {/*<td>{this.props.grocery.sellerName}</td>*/}
                <td>{this.props.grocery.price}</td>
                <td>
                    <input placeholder="Enter First Name"
                           onChange={this.firstNameChanged}>

                    </input>
                </td>
                <td>
                    <input placeholder="Enter Last Name"
                           onChange={this.lastNameChanged}>

                    </input>
                </td>
                <td>
                    <input placeholder="Enter Address"
                           onChange={this.addressChanged}>

                    </input>
                </td>
                <td><button onClick={() => this.createOrder()}
                            className="btn btn-success">Order</button></td>
            </tr>
        )
    }



}
export default GroceryItem