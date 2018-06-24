import React from 'react'

import { Link } from 'react-router-dom'

class Recipe extends React.Component {
    constructor(props) {
        super(props);
    }

    // this.props.recipe.imageUrlsBySize["90"]
    render() {
        return (
                <div className="card">
                    <img className="card-img-top" src={this.props.recipe.smallImageUrls} alt="Card image cap"></img>
                    <div className="card-body">
                        <h6 className="card-title">{this.props.recipe.recipeName}</h6>
                        <p className="card-text"></p>
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Created by:</strong> {this.props.recipe.sourceDisplayName}</li>
                            <li className="list-group-item"><strong>Average rating:</strong> {this.props.recipe.rating}</li>
                        </ul>
                    <div className="card-body">
                        <Link to={`/results/recipe/${this.props.recipe.id}`}>
                            <button className="btn btn-warning">More Info</button>
                        </Link>
                    </div>
                </div>
        )
    }
}
export default Recipe;