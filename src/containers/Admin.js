import React from 'react'

import UserService from "../services/UserService";
import OrderItem from "../components/OrderItem"
import RecipeItem from "../components/RecipeItem"
import ProductItem from "../components/ProductItem";

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            products: [],
            recipes: []
        }

        this.setOrders = this.setOrders.bind(this);
        this.setProducts = this.setProducts.bind(this);
        this.setRecipes = this.setRecipes.bind(this);
        this.findAllOrders = this.findAllOrders.bind(this);
        this.findAllProducts = this.findAllProducts.bind(this);
        this.findAllRecipes = this.findAllRecipes.bind(this);
        this.renderOrderList = this.renderOrderList.bind(this);
        this.renderProductList = this.renderProductList.bind(this);
        this.adminService = UserService.instance;
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

    componentDidMount() {
        this.findAllOrders();
        this.findAllProducts();
        this.findAllRecipes();
    }

    findAllOrders() {
        this.adminService.findAllOrders()
            .then((orders) => {
                // console.log(this.state.orders);
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

    renderOrderList() {
        let orders = null;
        if (this.state) {
            orders = this.state.orders.map(
                (order) => {return <OrderItem key={order.id} order={order}/>}
            )
        }
        return (orders);
    }

    renderRecipeList() {
        let recipes = null;
        if (this.state) {
            recipes = this.state.recipes.map(
                (recipe) => {return <RecipeItem key={recipe.id} recipe={recipe}/>}
            )
        }
        return (recipes);
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
        return (
            <div>
            <h1>Order List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope='col'>id</th>
                        <th scope='col'>address</th>
                    </tr>
                </thead>
            <tbody>
            {this.renderOrderList()}
            </tbody>
        </table>

                <h1>Recipe List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>id</th>
                        <th scope='col'>API id</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRecipeList()}
                    </tbody>
                </table>

                <h1>Product List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>name</th>
                        <th scope='col'>seller name</th>
                        <th scope='col'>price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderProductList()}
                    </tbody>
                </table>
            </div>
        )
    }



}
export default Admin;
