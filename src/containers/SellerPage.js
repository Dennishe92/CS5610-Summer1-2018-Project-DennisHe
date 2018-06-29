import React from 'react'

import SellerRow from '../components/SellerRow'
import UserService from '../services/UserService'

class SellerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sellers: []
        }

        this.setSellers = this.setSellers.bind(this);
        this.findAllSellers = this.findAllSellers.bind(this);
        this.followSeller = this.followSeller.bind(this);

        this.userService = UserService.instance;
    }

    setSellers(sellers) {
        this.setState({sellers: sellers})
    }

    componentDidMount() {
        this.findAllSellers()
    }

    findAllSellers() {
        this.userService.findAllSellers()
            .then((sellers) => {
                this.setSellers(sellers)
            })
    }

    followSeller(sellerId) {
        this.userService.followSeller(sellerId)
    }

    renderSellers() {
        let sellers = null;
        if (this.state) {
            sellers = this.state.sellers.map((seller) => {
                return (
                    <SellerRow seller={seller}
                               followSeller={this.followSeller}
                               key={seller.id}/>
                )
            });
        }
      return (sellers);
    }


    render() {
        return (
            <div>
                <h1>Sellers</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>Seller Name</th>
                        <th scope='col'></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderSellers()}
                    </tbody>
                </table>
            </div>

        )
    }

}
export default SellerPage;