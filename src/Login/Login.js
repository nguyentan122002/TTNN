import React from "react";
import "./Login.css"

export default function LoginPage(){
    return (
        <div className="login-page">
            <div className="login-form-container">
                <h1 className="title">Login Account</h1>

                <form>
                     <div className="mb-2">
                        <label htmlFor = "Email" className="form-labe">
                            Email
                        </label>
                        <input id="email" className="form-control" type="text" name="email"/>
                     </div>

                     <div className="mb-2">
                        <label htmlFor = "Password" className="form-labe">
                            Password
                        </label>
                        <input id="password" className="form-control" type="text" name="password"/>
                     </div>

                     <button type="submit" className="submit-btn">Login</button>
                     
                </form>
            </div>
        </div>
    );
}