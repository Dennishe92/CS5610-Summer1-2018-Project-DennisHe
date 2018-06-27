import React from 'react'

import UserService from '../services/UserService'

class RecipeItem extends React.Component {
    constructor(props) {
        super(props);

        this.userService = UserService.instance;
    }

    unlikeRecipe(recipeId) {
        this.userService.unlikeRecipe(recipeId);
    }

    render() {
        return (
            <tr>
                <td>{this.props.recipe.id}</td>
                <td>{this.props.recipe.apiId}</td>
                <td><button onClick={() => this.unlikeRecipe(this.props.recipe.id)}
                            className="btn btn-danger float-right">Unlike</button></td>
            </tr>
        )
    }
}
export default RecipeItem;