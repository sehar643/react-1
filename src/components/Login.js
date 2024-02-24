import React from "react";
import '../styles/Style.css'

function Login(){
    return(
        <div>
            <div className="container-fluid bg-dark text-light py-3 mt-5">
                <header className="text-center">
                    <h1 className="display-6">Log In</h1>
                </header>
            </div>    
           <div className="container body mt-5 my-2 bg-dark w-50 text-light p-2">
           <form>
                <label className="mt-4">UserName:</label> &emsp; 
                <input type="text" placeholder="username" id="name" required></input>
                <br></br>
                <label className="mt-3">Password:</label> &emsp; &nbsp;
                <input type="number" placeholder="password" id="password" required></input>
                <button type="submit" className="btn button mt-4">Sign in</button>
            </form>
           </div>
        </div>
    )
}

export default Login