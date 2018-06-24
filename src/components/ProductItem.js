import React from 'react'

class ProductItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
            </tr>
        )
    }
}
export default ProductItem;