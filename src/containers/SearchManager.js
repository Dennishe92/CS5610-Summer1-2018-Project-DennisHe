import React from 'react';

import HomePage from "./HomePage";
import ResultPage from "./ResultPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class SearchManager extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/home"
                           component={HomePage}>
                    </Route>

                    <Route path="/results/:search"
                           component={ResultPage}>
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
export default SearchManager