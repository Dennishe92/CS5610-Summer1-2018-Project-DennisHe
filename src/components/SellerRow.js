import React from 'react'

import UserService from '../services/UserService'

class SellerRow extends React.Component {
    constructor(props) {
        super(props)



        this.userService = UserService.instance;
    }


    followSeller() {
        this.userService.followSeller(this.state.seller.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.seller.username}</td>
                <td><button onClick={() => this.followSeller()}
                            className="btn btn-success">Follow Seller</button></td>
            </tr>
        )
    }

}
export default SellerRow;

