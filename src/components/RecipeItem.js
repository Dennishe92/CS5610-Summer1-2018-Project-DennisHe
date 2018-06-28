import React from 'react'

import CustomerService from '../services/CustomerService'

class RecipeItem extends React.Component {
    constructor(props) {
        super(props);

        this.customerService = CustomerService.instance;
    }

    unlikeRecipe() {
        this.customerService
            .unlikeRecipe(this.props.userId, this.props.recipe.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.recipe.id}</td>
                <td>{this.props.recipe.apiId}</td>
                <td><button onClick={() => this.unlikeRecipe()}
                            className="btn btn-danger float-right">Unlike</button></td>
            </tr>
        )
    }
}
export default RecipeItem;