import React from 'react'

class RecipeItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <tr>
                <td>{this.props.recipe.name}</td>
                <td>{this.props.recipe.rating}</td>
                <td>{this.props.recipe.url}</td>
            </tr>
        )
    }
}
export default RecipeItem;