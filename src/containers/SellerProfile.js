import React from 'react'
import UserService from "../services/UserService";
import ProductItem from "../components/ProductItem"

class SellerProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 2,
            seller: {
                username: '',
                email: '',
                phone: '',
                address: ''},
            products:[]
        }

        this.sellerProfileService = UserService.instance;
        this.updateSeller = this.updateSeller.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.phoneChanged = this.phoneChanged.bind(this);
        this.addressChanged = this.addressChanged.bind(this);
        this.renderProductList = this.renderProductList.bind(this);
        this.findUser = this.findUser.bind(this);
    };

    componentDidMount() {
        this.findUser();
    }

    findUser() {
        this.sellerProfileService.populateProfile()
            .then((user) => {
                this.setState({userId: user.id});
                this.setState({seller: {username: user.username}});
                this.setState({seller: {email: user.email}});
                this.setState({seller: {phone: user.phone}});
                this.setState({seller: {address: user.address}});
            })
            .then(() => {
                this.sellerProfileService.findProductsBySeller(this.state.userId)
                    .then((products) => {
                        this.setState({products: products});
                    })
            })
    }

    updateSeller() {
        this.sellerProfileService.updateUser(this.state.userId, this.state.seller)
            .then(this.findUser);
    }

    usernameChanged(event) {
        this.setState({seller: {username: event.target.value}
        });
    }

    emailChanged(event) {
        this.setState({seller: {email: event.target.value}});
    }

    phoneChanged(event) {
        this.setState({seller: {phone: event.target.value}});
    }

    addressChanged(event) {
        this.setState({seller: {address: event.target.value}});
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

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="http://localhost:3000/home">CookMi</a>
                <button type="button"
                        className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="http://localhost:3000/search">Search<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">My Profile<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Groceries<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="http://localhost:3000/login">Login<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="http://localhost:3000/register">Register<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>

            <br/>
            <br/>

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
                        <input onClick={this.emailChanged}
                               className="form-control wbdv-password-fld"
                               id="passwordFld"
                               value={this.state.seller.email}
                               placeholder="Email"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="phoneFld" className="col-sm-2 col-form-label">
                        Phone </label>
                    <div className="col-sm-10">
                        <input onClick={this.phoneChanged}
                               className="form-control wbdv-password-fld"
                               id="phoneFld"
                               value={this.state.seller.phone}
                               placeholder="Phone"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="addressFld" className="col-sm-2 col-form-label">
                        Address </label>
                    <div className="col-sm-10">
                        <input onClick={this.addressChanged}
                               className="form-control wbdv-password-fld"
                               id="addressFld"
                               value={this.state.seller.address}
                               placeholder='Address'/>
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
                <h1>Grocery Listed</h1>
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