import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../Images/NotFound.jpg"
import Button from "../Buttons/Button";
import "./NotFound.css";
export default function NotFound() {
    return(
       <div 
            style ={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
        >
            <img
             src={NotFoundImg}
             alt="not-found"
             style={{ width: "700px", height: "450px", margin: "50px auto" }}
            />
        <div>
            <Link to="/">
                <Button className="home-button">Back to Home.</Button>
            </Link>
        </div>
     </div>
    );
}