import React from 'react'

import UserService from "../services/UserService";
import OrderService from "../services/OrderService"
import ProductService from "../services/ProductService"


import OrderAdmin from "../components/OrderAdmin"
import RecipeAdmin from "../components/RecipeAdmin"
import ProductAdmin from "../components/ProductAdmin";

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
        this.deleteOrder = this.deleteOrder.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);

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

    componentDidMount() {
        this.findAllOrders();
        this.findAllProducts();
        this.findAllRecipes();
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

    deleteOrder(orderId) {
        this.orderService.deleteOrder(orderId)
            .then(() => {
                this.findAllOrders();
                this.findAllProducts();
                this.findAllRecipes();
            });
    }

    deleteProduct(productId) {
        this.productService.deleteProduct(productId)
            .then(() => {
                this.findAllOrders();
                this.findAllProducts();
                this.findAllRecipes();
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
            </div>
        )
    }



}
export default Admin;