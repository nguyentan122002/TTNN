import React from "react";
import "./Register.css"

export default function RegisterPage(){
    return (
        <div className="register-page">
            <div className="register-form-container">
                <h1 className="title">Register Account</h1>

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

                     <div className="mb-2">
                        <label htmlFor = "ConfirmPassword" className="form-labe">
                            ConfirmPassword
                        </label>
                        <input id="confirmPassword" className="form-control" type="text" name="confirmPassword"/>
                     </div>

                     <button type="submit" className="submit-btn">Register</button>
                     
                </form>
            </div>
        </div>
    );
}