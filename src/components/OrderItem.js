import React from 'react'

class OrderItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <tr>
                <td>{this.props.order.id}</td>
                <td>{this.props.order.address}</td>
            </tr>
        )
    }
}
export default OrderItem;