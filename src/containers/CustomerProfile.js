import React from 'react'
import UserService from "../services/UserService";
import RecipeItem from "../components/RecipeItem"
import OrderItem from "../components/OrderItem"

class CustomerProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 1,
            customer: {
                username: 'Stefan',
                email: '',
                phone: '',
                address: ''},
            recipes:[],
            orders:[]
        }

        this.customerProfileService = UserService.instance;
        this.updateCustomer = this.updateCustomer.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.addressChanged = this.addressChanged.bind(this);
        this.renderRecipeList = this.renderRecipeList.bind(this);
        this.renderOrderList = this.renderOrderList.bind(this);
        this.findUser = this.findUser.bind(this);
        this.findAllRecipes = this.findAllRecipes.bind(this);
        this.findAllOrders = this.findAllOrders.bind(this);
    };

    componentDidMount() {

        this.findUser();
        this.findAllRecipes();
        this.findAllOrders();
        // this.customerProfileService.populateProfile()
        //     .then((user) => {
        //         this.setState({customer: user});
        //         this.setState({customer: {userId: user.id}});
        //         // console.log(this.state.customer.userId);
        //     })
        // this.render();
    }

    findUser() {
        this.customerProfileService.findUserByUsername('Stefan')
            .then((user) => {
                this.setState({customer: user});
                // this.render();
            });
    }

    findAllRecipes() {
        this.customerProfileService.findRecipesByCustomer(this.state.userId)
            .then((recipes) => {
                    this.setState({recipes: recipes});
                    // this.render();
                }
            )
    }

    findAllOrders() {
        this.customerProfileService.findOrdersByCustomer(this.state.userId)
            .then((orders) => {
                this.setState({orders: orders});
                // this.render();
            })
    }

    updateCustomer() {
        this.customerProfileService.updateUser(this.state.userId, this.state.customer)
            .then((user) => {this.findUser(user.username);});
    }

    usernameChanged(event) {
        console.log(event.target.value);
        this.setState({customer: {username: event.target.value}
        });
    }

    emailChanged() {

    }

    phoneChanged() {

    }

    addressChanged() {

    }

    renderRecipeList() {
        let recipes = null;

        if (this.state) {
            console.log(this.state.recipes.length);
            recipes = this.state.recipes.map(
                (recipe) => {return <RecipeItem key={recipe.id} recipe={recipe}/>}
            )
        }
        return (recipes);
    }

    renderOrderList() {
        let orders = null;

        if (this.state) {
            // console.log(this.state.orders.length);
            orders = this.state.orders.map(
                (order) => {return <OrderItem key={order.id} order={order}/>}
            )
        }

        return (orders);
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
                               value={this.state.customer.username}
                               placeholder="username"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Email </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-password-fld"
                               id="emailwordFld" placeholder={this.state.customer.email}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Phone </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-password-fld" id="phoneFld"
                               placeholder={this.state.customer.phone}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Address </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-password-fld" id="addressFld"
                               placeholder={this.state.customer.address}/>
                    </div>
                </div>

                <div className="form-group row">

                    <label className="col-sm-2 col-form-label"/>
                    <div className="col-sm-10">
                        <button onClick={this.updateCustomer}
                                id="updateBtn"
                                type="button"
                                className="btn btn-primary btn-block">Update
                        </button>
                        <br/>
                    </div>
                </div>
            </form>

            <div>
                <h1>My Liked Recipies</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Rating</th>
                        <th scope='col'>Url</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRecipeList()}
                    </tbody>
                </table>
            </div>

            <div>
                <h1>My Orders</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Rating</th>
                        <th scope='col'>Url</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderOrderList()}
                    </tbody>
                </table>
            </div>
        </div>
    }
}
export default CustomerProfile