import React from 'react'


class ProductItem extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>${this.props.product.price}</td>
                <td><button className="btn btn-danger"
                            onClick={() => this.props.deleteProduct(this.props.sellerId, this.props.product.id)}>
                    Delete
                </button></td>
            </tr>
        )
    }
}
export default ProductItem;