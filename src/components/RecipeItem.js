import React from 'react'

class RecipeItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <tr>
                <td>{this.props.recipe.id}</td>
                <td>{this.props.recipe.apiId}</td>
            </tr>
        )
    }
}
export default RecipeItem;