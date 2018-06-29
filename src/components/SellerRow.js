import React from 'react'

class SellerRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <tr>
                <td>{this.props.seller.username}</td>
                <td><button onClick={() => this.props.followSeller(this.props.seller.id)}
                            className="btn btn-success">Follow Seller</button></td>
            </tr>
        )
    }

}
export default SellerRow;

