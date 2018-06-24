import React from'react'
import CustomerService from "../services/CustomerService";

class RecipeDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            recipeId: '',
            recipe: {}
        }

        this.setSearch = this.setSearch.bind(this);
        this.setRecipeId = this.setRecipeId.bind(this);
        this.setRecipe = this.setRecipe.bind(this);

        this.customerService = CustomerService.instance;
    }

    setSearch(search) {
        this.setState({search: search})
    }

    setRecipeId(recipeId) {
        this.setState({recipeId: recipeId})
    }

    setRecipe(recipe) {
        this.setState({recipe: recipe});
    }

    componentDidMount() {
        this.setSearch(this.props.match.params.search);
        this.setRecipeId(this.props.match.params.recipeId);
        this.findRecipeById(this.props.match.params.recipeId);
    }

    componentWillReceiveProps(newProps){
        this.setRecipeId(newProps.match.params.recipeId);
        this.findRecipeById(newProps.match.params.recipeId);
    }

    findRecipeById(recipeId) {
        this.customerService.findRecipeById(recipeId)
            .then((recipe) => {
                this.setRecipe(recipe)
            });
    }

    renderIngredients() {
        let ingredients = this.state.recipe.ingredientLines;
        console.log(ingredients);
        console.log(this.state.recipe.ingredientLines);
        // ingredients.map((ingredient) => {
        //         return (<li>{ingredient}</li>)
        //
        //     }
        // );
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

                <h1>{this.state.recipe.name}</h1>
                <h4><strong>Cook Time:</strong> {this.state.recipe.cookTime}</h4>

                <button className="btn btn-danger">Like</button>

                {/*<ul>*/}
                    {/*{this.renderIngredients()}*/}
                {/*</ul>*/}

                {/*<img src={this.state.recipe.images[2]}></img>*/}
            </div>
        )
    }
}
export default RecipeDetailPage;