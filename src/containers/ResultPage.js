import React from 'react'
import CustomerService from '../services/CustomerService'
import Recipe from '../components/Recipe'

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
        //this.setSearch(this.props.match.params.search);
        this.findRecipe(this.props.match.params.search);
        //console.log(this.state.search)
    }

    // componentWillReceiveProps(newProps) {
    //     this.setSearch(newProps.match.params.search)
    //     this.findRecipe(newProps.match.params.search)
    //     //this.setRecipes(newProps.recipes)
    // }

    findRecipe(recipeName) {
        this.customerService.findRecipe(recipeName)
            .then((recipes) => {
                this.setRecipes(recipes)
            });
    }

    renderListOfRecipes() {

        let recipes = this.state.recipes.map(
            (recipe) => {
                // console.log(recipe);
                return <Recipe recipe={recipe} key={recipe.id}/>
                // recipeIngredients={recipe.ingredients}
                // recipeRating={recipe.rating}
                // recipeImage={recipe.imageUrlsBySize}/>
            }
        );

        return recipes;
    }

    render() {
        return (

            <div className="container-fluid">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="http://localhost:3000/home">CookMi</a>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/login">Login<span className="sr-only">(current)</span></a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/register">Register<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>


                </nav>


                <div>
                    <ul className="list-group">
                        <br></br>
                        {this.renderListOfRecipes()}
                    </ul>
                </div>

            </div>
        )
    }
}
export default ResultPage;