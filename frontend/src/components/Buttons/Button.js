import React from "react";
import "./Button.css"

export default function Button(props) {
    return(
        <React.Fragment>
            <button
            className={
                props.className
                ? `${props.className} button-default`
                : "button-default"
            }
            >
                {props.children?props.children : "Button"}
            </button>
        </React.Fragment>
    );

}