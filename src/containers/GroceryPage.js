import React from 'react'

import GroceryItem from '../components/GroceryItem'
import CustomerService from '../services/CustomerService'

class GroceryPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            groceries: []
        }

        this.customerService = CustomerService.instance;
    }

    componentDidMount() {
        this.findAllGroceries();
    }

    setGroceryList(groceries) {
        this.setState({groceries: groceries})
    }

    findAllGroceries() {
        this.customerService.findAllGroceries()
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