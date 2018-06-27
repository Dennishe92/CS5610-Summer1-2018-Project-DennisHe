import React from 'react'

class ProductItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.sellerName}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}
export default ProductItem;