import React from 'react'
import { Link } from 'react-router-dom'

import CustomerService from '../services/CustomerService'

class RecipeAdmin extends React.Component {
    constructor(props) {
        super(props);

        this.customerService = CustomerService.instance;
    }

    unlikeRecipe() {
        this.customerService
            .unlikeRecipe(this.props.userId, this.props.recipe.id)
        window.location.reload();
    }

    render() {
        return (
            <tr>
                <td>{this.props.recipe.id}</td>
                <td><Link to={`/details/${this.props.recipe.apiId}`}><button className="btn btn-info">Review</button></Link></td>
            </tr>
        )
    }
}
export default RecipeAdmin;