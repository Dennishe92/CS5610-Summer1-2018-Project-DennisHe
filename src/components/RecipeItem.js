import React from 'react'
import { Link } from 'react-router-dom'

import CustomerService from '../services/CustomerService'

class RecipeItem extends React.Component {
    constructor(props) {
        super(props);

        this.customerService = CustomerService.instance;
    }

    unlikeRecipe() {
        this.customerService
            .unlikeRecipe(this.props.userId, this.props.recipe.id)
            .then(window.location.reload)
    }

    render() {
        return (
            <tr>
                <td>{this.props.recipe.id}</td>
                <td><Link to={`/details/${this.props.recipe.apiId}`}><button className="btn btn-info">Review</button></Link></td>
                <td><button onClick={() => this.unlikeRecipe()}
                            className="btn btn-danger float-right">Unlike</button></td>
            </tr>
        )
    }
}
export default RecipeItem;