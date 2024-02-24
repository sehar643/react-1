import React from "react";
import '../styles/Style.css'

function Register() {
    return (
        <div>
            <div className="container-fluid bg-dark text-light py-3 mt-5">
                <header className="text-center">
                    <h1 className="display-6">Registration form</h1>
                </header>
            </div>
            <div className="container body mt-5 my-2 bg-dark w-50 text-light p-2">
                <form className="row g-3">
                    <div>
                        <div className="col">
                            <label htmlFor="validationCustom01" className="form-label">First name</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="UserName" required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col">
                            <label htmlFor="validationCustom02" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="lastName" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>Pakistan</option>
                            <option>India</option>

                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn button">Sign in</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register