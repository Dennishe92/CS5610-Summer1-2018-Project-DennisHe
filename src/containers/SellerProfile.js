import React from 'react'
import UserService from "../services/UserService";
import ProductItem from "../components/ProductItem"

class SellerProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 2,
            seller: {
                username: 'idiots',
                email: '',
                phone: '',
                address: ''},
            products:[]
        }

        this.sellerProfileService = UserService.instance;
        this.updateSeller = this.updateSeller.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.addressChanged = this.addressChanged.bind(this);
        this.renderProductList = this.renderProductList.bind(this);
        this.findUser = this.findUser.bind(this);
        this.findAllProducts = this.findAllProducts.bind(this);
    };

    componentDidMount() {
        this.findUser();
        this.findAllProducts();
    }

    findUser() {
        this.sellerProfileService.findUserByUsername('idiots')
            .then((user) => {
                this.setState({seller: user});
                // this.render();
            });
    }

    findAllProducts() {
        this.sellerProfileService.findProductsBySeller(this.state.userId)
            .then((recipes) => {
                    this.setState({products: recipes});
                    // this.render();
                }
            )
    }

    updateSeller() {
        this.sellerProfileService.updateUser(this.state.userId, this.state.seller)
            .then((user) => {this.findUser(user.username);});
    }

    usernameChanged(event) {
        this.setState({seller: {username: event.target.value}
        });
    }

    emailChanged() {

    }

    phoneChanged() {

    }

    addressChanged() {

    }

    renderProductList() {
        let products = null;

        if (this.state) {
            products = this.state.products.map(
                (product) => {return <ProductItem key={product.id} product={product}/>}
            )
        }

        return (products);
    }

    render() {
        return <div className="container-fluid">

            <form>
                <div className="form-group row">
                    <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input onChange={this.usernameChanged}
                               className="form-control"
                               id="usernameFld"
                               value={this.state.seller.username}
                               placeholder="username"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Email </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-password-fld"
                               id="emailwordFld" placeholder={this.state.seller.email}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Phone </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-password-fld" id="phoneFld"
                               placeholder={this.state.seller.phone}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Address </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-password-fld" id="addressFld"
                               placeholder={this.state.seller.address}/>
                    </div>
                </div>

                <div className="form-group row">

                    <label className="col-sm-2 col-form-label"/>
                    <div className="col-sm-10">
                        <button onClick={this.updateSeller}
                                id="updateBtn"
                                type="button"
                                className="btn btn-primary btn-block">Update
                        </button>
                        <br/>
                    </div>
                </div>
            </form>

            <div>
                <h1>Product List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Rating</th>
                        <th scope='col'>Url</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderProductList()}
                    </tbody>
                </table>
            </div>
        </div>
    }
}
export default SellerProfile