import React from'react'

import YummlyService from "../services/YummlyService";
import CustomerService from "../services/CustomerService";
import UserService from '../services/UserService';


class RecipeDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            recipeId: '',
            recipe: {},
            ingredients: [],
            image: {}
        }

        this.setSearch = this.setSearch.bind(this);
        this.setRecipeId = this.setRecipeId.bind(this);
        this.setRecipe = this.setRecipe.bind(this);
        this.setIngredients = this.setIngredients.bind(this);
        this.setImage = this.setImage.bind(this);

        this.yummlyService = YummlyService.instance;
        this.customerService = CustomerService.instance;
        this.userService = UserService.instance;
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

    setIngredients(ingredients) {
        this.setState({ingredients: ingredients});
    }

    setImage(image) {
        this.setState({image: image})
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
        this.yummlyService.findRecipeById(recipeId)
            .then((recipe) => {
                this.setRecipe(recipe);
                this.setIngredients(recipe.ingredientLines);
                this.setImage(recipe.images[0].hostedLargeUrl);
            });
    }

    renderIngredients() {
        console.log(this.state.image);
        let ingredients = null;
        if (this.state) {
            ingredients = this.state.ingredients.map((ingredient) => {
                return<li>{ingredient}</li>
            })
        }
        return (ingredients);
    }

    likeRecipe(recipeId) {
        this.userService.checkLogin()
            .then((response) => {
                if (response.status === 409) {
                    alert("Please login first.");
                } else {
                    this.customerService.likeRecipe(recipeId)
                        .then(alert("success"));
                }
            })
    }

    checkLoginForGrocery() {
        this.userService.checkLogin()
            .then((response) => {
                if (response.status === 409) {
                    alert("Please login first.")
                    this.props.history.push('/login');
                } else {
                    this.userService.findCurrentUser()
                        .then((user) => {
                            if (user.role !== 'Customer') {
                                alert("You must be a customer to buy groceries")
                            } else {
                                this.props.history.push('/grocery');
                            }
                        })
                }
            })
    }

    checkLoginForFollow() {
        this.userService.checkLogin()
            .then((response) => {
                if (response.status === 409) {
                    alert("Please login first.")
                    this.props.history.push('/login');
                } else {
                    this.userService.findCurrentUser()
                        .then((user) => {
                            if (user.role !== 'Customer') {
                                alert("You must be a customer to follow sellers")
                            } else {
                                this.props.history.push('/sellerpage');
                            }
                        })
                }
            })
    }

    checkLoginForLogin() {
        this.userService.findCurrentUser()
            .then((user) => {
                if (user !== null) {
                    alert("You're already logged in")
                } else {
                    this.props.history.push('/login');
                }
            })
    }

    checkLoginForLogout() {
        this.userService.checkLogin()
            .then((response) => {
                if (response.status === 409) {
                    alert("You are not logged in");
                } else {
                    this.userService.logout()
                        .then((response) => {
                            if (response === null) {
                                alert("You successfully logged out")
                                this.props.history.push('/home');
                            }
                        })

                }
            })
    }

    checkLoginForProfile() {
        this.userService.checkLogin()
            .then((response) => {
                if (response.status === 409) {
                    alert("You need to login first");
                    this.props.history.push('/login');
                }
                else {
                    this.userService.findCurrentUser()
                        .then((user) => {
                            if (user === null) {
                                alert("You need to login first")
                                this.props.history.push('/login');
                            }
                            if (user.role === 'Customer') {
                                this.props.history.push('/customer');
                            }
                            if (user.role === 'Seller') {
                                this.props.history.push('/seller');
                            }
                            if (user.role === 'Delivery') {
                                this.props.history.push('/delivery')
                            }
                        })
                }
            })
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
                                <a className="nav-link" href="#" onClick={() => this.checkLoginForProfile()}>Profile<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={() => this.checkLoginForFollow()}>FollowSellers<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={() => this.checkLoginForGrocery()}>Groceries<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={() => this.checkLoginForLogin()}>Login<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={() => this.checkLoginForLogout()}>Logout<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/register">Register<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <span className="form-inline">
                    <h1 className="mr-auto">{this.state.recipe.name}</h1>
                </span>

                <span className="form-inline">
                <img className="mr-5" src={this.state.image}></img>
                <button className="btn btn-success"
                        onClick={() => this.likeRecipe(this.state.recipe.id)}>
                    Like
                </button>
            </span>

                {/*<h4><strong>Cook Time:</strong> {this.state.recipe.cookTime}</h4>*/}

                <br/>

                <ul>
                    {this.renderIngredients()}
                </ul>

            </div>
        )
    }
}
export default RecipeDetailPage;