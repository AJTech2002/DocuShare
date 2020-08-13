import React from 'react';
import './Login.css';
import firebase from 'firebase';

//Router Code
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function LoginScreen() {
    return (
        <div id="loginScreen" style={{ height: "100vh", width: "100vw" }} className="centerParent">

            <div style={{ height: "30vh", width: "45vw", backgroundColor: "#dbdbdb" }} className="centerChild loginScreen">

                <form>
                    <label>
                        Username:
                        <input type="text" name="username" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="username" />
                    </label>

                    <Link to="/main"><button type="button" name="login" /></Link>
                </form>

            </div>


        </div>
    );

}

export default LoginScreen;