import React from 'react'
import { Link } from 'react-router-dom'
import UserService from '../services/UserService'

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.userService = UserService.instance;
    }

    checkLogin() {
        this.userService.checkLogin()
            .then((response) => {
                if (response.status === 409) {
                    alert("Please login first.")
                } else {
                    <Link to={`/details/${this.props.recipe.id}`}></Link>;
                }
            })
    }


    //<Link to={`/results/recipe/${this.props.recipe.id}`}>
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
                    <li className="list-group-item"><strong>Source:</strong> {this.props.recipe.sourceDisplayName}</li>
                    <li className="list-group-item"><strong>Average rating:</strong> {this.props.recipe.rating}</li>
                </ul>
                <div className="card-body">
                    <button onClick={() => this.checkLogin()}
                        className="btn btn-warning">More Info</button>
                </div>
            </div>
        )
    }
}
export default Recipe;