import React from 'react'

import UserService from "../services/UserService";

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            products: [],
            recipes: []
        }

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

    // componentDidMount() {
    //     this.findAllOrders();
    //     this.findAllProducts();
    //     this.findAllRecipes();
    // }

    findAllOrders() {
        this.adminService.findAllOrders
            .then((orders) => {
                this.setOrders({orders: orders})
            })
    }

    findAllProducts() {
        this.adminService.findAllProducts
            .then((products) => {
                this.setProducts({products: products})
            })
    }

    findAllRecipes() {
        this.adminService.findAllRecipes
            .then((recipes) => {
                this.setRecipes({recipes: recipes})
            })
    }

    render() {
        return (
            <h1>Hello</h1>
        )
    }




}
export default Admin;
