import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import "./HomeScreen.css";

export default function HomeScreen() {
    return(
        <div className="home">
            <div className="home-container">
                <h3 className="home-title">Medicords</h3>
                <blockquote className="quote">
                    {" "}
                    <q> - One place to store all your medical records - </q>
                </blockquote>
                <div className="auth-buttons">
                    <Link to="/signup">
                        <Button className="signup-auth">Sign Up</Button>
                    </Link>
                    <Link to="/login">
                        <Button className="login-auth">Login.</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}