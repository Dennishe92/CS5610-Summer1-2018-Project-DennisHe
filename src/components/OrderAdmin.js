import React from 'react'

class OrderAdmin extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <tr>
                <td>{this.props.order.id}</td>
                <td>{this.props.order.customerFirstName}</td>
                <td>{this.props.order.customerLastName}</td>
                <td>{this.props.order.address}</td>
                <td>
                    <button className="btn btn-danger"
                            onClick={() => this.props.deleteOrder(this.props.order.id)}>Delete</button>
                </td>
            </tr>
        )
    }
}
export default OrderAdmin;