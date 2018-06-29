import React from 'react'

import UserService from "../services/UserService";
import OrderService from "../services/OrderService"
import ProductService from "../services/ProductService"

import UserAdmin from "../components/UserAdmin"
import OrderAdmin from "../components/OrderAdmin"
import RecipeAdmin from "../components/RecipeAdmin"
import ProductAdmin from "../components/ProductAdmin";

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            orders: [],
            products: [],
            recipes: []
        }

        this.setUsers = this.setUsers.bind(this);
        this.setOrders = this.setOrders.bind(this);
        this.setProducts = this.setProducts.bind(this);
        this.setRecipes = this.setRecipes.bind(this);
        this.findAllOrders = this.findAllOrders.bind(this);
        this.findAllProducts = this.findAllProducts.bind(this);
        this.findAllRecipes = this.findAllRecipes.bind(this);
        this.renderOrderList = this.renderOrderList.bind(this);
        this.renderProductList = this.renderProductList.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.deleteUser = this.deleteUser.bind(this);

        this.adminService = UserService.instance;
        this.orderService = OrderService.instance;
        this.productService = ProductService.instance;
    }

    setOrders(orders) {
        this.setState({orders: orders})
    }

    setProducts(products) {
        this.setState({products: products})
    }

    setRecipes(recipes) {
        this.setState({recipes: recipes})
    }

    setUsers(users) {
        this.setState({users: users});
    }

    componentDidMount() {
        this.findAllOrders();
        this.findAllProducts();
        this.findAllRecipes();
        this.findAllUsers();
    }

    findAllOrders() {
        this.adminService.findAllOrders()
            .then((orders) => {
                this.setOrders(orders)
            })
    }

    findAllProducts() {
        this.adminService.findAllProducts()
            .then((products) => {
                this.setProducts(products)
            })
    }

    findAllRecipes() {
        this.adminService.findAllRecipes()
            .then((recipes) => {
                this.setRecipes(recipes)
            })
    }

    findAllUsers() {
        // fixme
        this.adminService.findAllUsers()
            .then((users) => {
                this.setUsers(users)
            })
    }

    renderOrderList() {
        let orders = null;
        if (this.state) {
            orders = this.state.orders.map(
                (order) => {return <OrderAdmin key={order.id}
                                               order={order}
                                               deleteOrder={this.deleteOrder}/>}
            )
        }
        return (orders);
    }

    renderRecipeList() {
        let recipes = null;
        if (this.state) {
            recipes = this.state.recipes.map(
                (recipe) => {return <RecipeAdmin key={recipe.id} recipe={recipe}/>}
            )
        }
        return (recipes);
    }

    renderProductList() {
        let products = null;
        if (this.state) {
            products = this.state.products.map(
                (product) => {return <ProductAdmin key={product.id}
                                                   product={product}
                                                   deleteProduct={this.deleteProduct}/>}
            )
        }
        return (products);
    }

    renderUserList() {
        let users = null;
        if (this.state) {
           users = this.state.users.map(
               (user) => {return <UserAdmin key={user.id}
                                               user={user}
                                               deleteUser={this.deleteUser}/>}
           )
        }

        return (users);
    }

    deleteUser(userId) {
        //fixme
        this.adminService.deleteUser(userId)
            .then(() => {
                this.findAllOrders();
                this.findAllProducts();
                this.findAllRecipes();
                this.findAllUsers();
            })
    }

    deleteOrder(orderId) {
        this.orderService.deleteOrder(orderId)
            .then(() => {
                this.findAllOrders();
                this.findAllProducts();
                this.findAllRecipes();
                this.findAllUsers();
            });
    }

    deleteProduct(productId) {
        this.productService.deleteProduct(productId)
            .then(() => {
                this.findAllOrders();
                this.findAllProducts();
                this.findAllRecipes();
                this.findAllUsers();
            })
    }


    render() {
        return (
            <div>
                <h1>Recipe List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>Recipe Id</th>
                        <th scope='col'>API Id</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRecipeList()}
                    </tbody>
                </table>

                <h1>Order List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>Order Id</th>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderOrderList()}
                    </tbody>
                </table>

                <h1>Product List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>Product Id</th>
                        <th scope='col'>Seller Name</th>
                        <th scope='col'>Product Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderProductList()}
                    </tbody>
                </table>

                <h1>User List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>User Id</th>
                        <th scope='col'>User Role</th>
                        <th scope='col'>User Name</th>
                        <th scope='col'>User Phone</th>
                        <th scope='col'>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderUserList()}
                    </tbody>
                </table>
            </div>
        )
    }



}
export default Admin;