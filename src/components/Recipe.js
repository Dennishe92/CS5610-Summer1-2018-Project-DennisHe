import React from 'react'

class Recipe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item form-control">

                <img className="img-responsive img-thumbnail" src={this.props.recipe.imageUrlsBySize["90"]}></img>
                <h1>{this.props.recipe.recipeName}</h1>


            </li>
        )
    }
}
export default Recipe;