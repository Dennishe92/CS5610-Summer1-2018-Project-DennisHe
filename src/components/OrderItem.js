import React from 'react'

class OrderItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <tr>
                <td>{this.props.order.name}</td>
            </tr>
        )
    }
}
export default OrderItem;