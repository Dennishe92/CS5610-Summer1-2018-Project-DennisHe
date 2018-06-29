import React from 'react'


class ProductAdmin extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <tr>
                <td>{this.props.product.id}</td>
                <td>{this.props.product.sellerName}</td>
                <td>{this.props.product.name}</td>
                <td>${this.props.product.price}</td>
                <td><button className="btn btn-danger"
                            onClick={() => this.props.deleteProduct(this.props.product.id)}>
                    Delete
                </button></td>
            </tr>
        )
    }
}
export default ProductAdmin;