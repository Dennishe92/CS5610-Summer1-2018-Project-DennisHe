import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import ResultPage from "./ResultPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import RecipeDetailPage from "./RecipeDetailPage";
import CustomerProfile from "./CustomerProfile"
import DeliveryProfile from "./DeliveryProfile"
import SellerProfile from "./SellerProfile"


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

                    <Route path="/customer"
                           component={CustomerProfile}>
                    </Route>

                    <Route path="/seller"
                           component={SellerProfile}>
                    </Route>
                    <Route path="/delivery"
                           component={DeliveryProfile}>
                    </Route>
                </div>
            </Router>

        )
    }
}
export default HomeManager