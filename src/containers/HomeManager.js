import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import ResultPage from "./ResultPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import RecipeDetailPage from "./RecipeDetailPage";


class HomeManager extends React.Component {
    render() {
        return (

            <Router>
                <div>
                    <Route path="/home"
                           component={HomePage}>
                    </Route>

                    <Route path="/search"
                           component={SearchPage}>
                    </Route>

                    <Route path="/results/:search"
                           component={ResultPage}>
                    </Route>

                    <Route path="/results/recipe/:recipeId"
                           component={RecipeDetailPage}>
                    </Route>

                    <Route path="/login"
                           component={LoginPage}>
                    </Route>

                    <Route path="/register"
                           component={RegisterPage}>
                    </Route>
                </div>
            </Router>

        )
    }
}
export default HomeManager