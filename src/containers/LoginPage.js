import React from 'react'

class LoginPage extends React.Component {
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

                <br/>

                <h1>Sign In</h1>

                <form>
                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="usernameFld" placeholder=""></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-password-fld"
                                   id="passwordFld" placeholder=""></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button id="loginBtn" type="button" className="btn btn-primary btn-block">Sign in</button>
                            <br></br>
                                <div className="row">
                                    <div className="col-6">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="float-right">Register
                                            Here</a>
                                    </div>
                                </div>
                        </div>
                    </div>



                </form>

            </div>
        )
    }
}
export default LoginPage;