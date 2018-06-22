import React from 'react'

class HomePage extends React.Component {
    render() {
        return (
            <div className="container-fluid">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="http://localhost:3000">CookMi</a>
                    {/*<button type="button"*/}
                    {/*className="navbar-toggler" type="button" data-toggle="collapse"*/}
                    {/*data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                    {/*aria-expanded="false" aria-label="Toggle navigation">*/}
                    {/*<span className="navbar-toggler-icon"></span>*/}
                    {/*</button>*/}

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

                <br/>

                <div className="jumbotron container-fluid">
                    <h1 className="display-4">Welcome to CookMi :)</h1>
                    <p className="lead">We are the leading platform to discover different food recipes to expand your
                        palate. Here on CookMi, we can make your cooking from impossible to possible.</p>
                    <hr className="my-4"></hr>
                    <p>We utilize the Yummly API to provide you with vast amount of food recipes just at your finger
                        tips.</p>
                    <a className="btn btn-primary btn-lg" href="http://localhost:3000/search" role="button">Start Searching</a>
                </div>

            </div>
        )
    }
}
export default HomePage