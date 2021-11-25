import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return(
        <div className="nav-container">
            <Link to="/" style={{ textDecoration: "none", color: "white"}}>
                {" "}
                <div className="nav-title">
                    <h2> Medicords </h2>
                </div>
            </Link>
            <ul className="link-container">
                <li className="link">About Us!</li>
                <li className="link">Contact Us!</li>
            </ul>
        </div>
    );
}