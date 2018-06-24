import React from 'react'

class RegisterPage extends React.Component {
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

                <h1>Register</h1>

                <form>
                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="usernameFld" placeholder="Username"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="passwordFld" placeholder="Password"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="verifyPasswordFld" className="col-sm-2 col-form-label">Verify Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="verifyPasswordFld"
                                   placeholder="Verify Password"></input>
                        </div>
                    </div>
                </form>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button id="registerBtn" type="button" className="btn btn-info btn-block">Register</button>
                        <br></br>
                        <div className="row">
                            <div className="col-6">
                                <a href="#">Click Here To Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default RegisterPage;