import React from 'react'
import { Route } from 'react-router-dom'


import CustomerService from '../services/CustomerService'
import Recipe from '../components/Recipe'
import RecipeDetailPage from "./RecipeDetailPage";

class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            recipes: [],
        }

        this.setRecipes = this.setRecipes.bind(this);
        this.setSearch = this.setSearch.bind(this);

        this.customerService = CustomerService.instance;
    }

    setSearch(search) {
        this.setState({search: search})
    }

    setRecipes(recipes) {
        this.setState({recipes: recipes})
    }

    componentDidMount() {
        this.setSearch(this.props.match.params.search);
        this.findRecipe(this.props.match.params.search);
    }

    // componentWillReceiveProps(newProps) {
    //     this.setSearch(newProps.match.params.search);
    //     this.findRecipe(newProps.match.params.search);
    // }

    findRecipe(recipeName) {
        this.customerService.findRecipe(recipeName)
            .then((recipes) => {
                this.setRecipes(recipes)
            });
    }

    renderListOfRecipes() {
        let recipes = this.state.recipes.map((recipe) => {
                return (
                    <div className="col-sm-3">
                        <Recipe recipe={recipe}
                                key={recipe.id}
                                search={this.state.search}/>
                    </div>
                )
            }
        );
        return recipes;
    }

    render() {
        return (

            <div className="container-fluid">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="http://localhost:3000/home">CookMi</a>
                    <button type="button"
                            className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/search">Search<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">My Profile<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Groceries<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/login">Login<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/register">Register<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <br/>


                <div className="row">
                    {this.renderListOfRecipes()}
                </div>

            </div>
        )
    }
}
export default ResultPage;