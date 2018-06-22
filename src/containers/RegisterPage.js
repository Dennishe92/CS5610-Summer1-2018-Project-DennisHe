import React from 'react'

class RegisterPage extends React.Component {
    render() {
        return (
            <div>
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