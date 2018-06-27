import React from 'react'

import GroceryItem from '../components/GroceryItem'
import ProductService from '../services/ProductService'

class GroceryPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            groceries: []
        }

        this.productService = ProductService.instance;
    }

    componentDidMount() {
        this.findAllGroceries();
    }

    setGroceryList(groceries) {
        this.setState({groceries: groceries})
    }

    findAllGroceries() {
        this.productService.findAllGroceries()
            .then((groceries) => {
                this.setGroceryList(groceries)
            })
    }

    renderGroceries() {
        let groceries = this.state.groceries.map((grocery) => {
            return (
                <GroceryItem grocery={grocery}
                             key={grocery.id}/>
            )
        });
        return groceries;
    }


    render() {
        return (

            <div>
                <h1>Groceries</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>Item</th>
                        <th scope='col'>Seller</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Address</th>
                        <th scope='col'></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderGroceries()}
                    </tbody>
                </table>
            </div>

        )
    }
}
export default GroceryPage;