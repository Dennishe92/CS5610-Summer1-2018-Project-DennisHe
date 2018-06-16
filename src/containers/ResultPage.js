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

    // componentDidMount() {
    //     this.setSearch(this.props.search)
    //     this.setRecipes(this.props.recipes)
    // }

    componentWillReceiveProps(newProps) {
        this.setSearch(newProps.match.params.search)
        this.findRecipe(newProps.match.params.search)
        //this.setRecipes(newProps.recipes)
    }

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
            <div>
                <ul className="list-group">
                    <br></br>
                    {this.renderListOfRecipes()}
                </ul>
            </div>
        )
    }
}
export default ResultPage;