
import React from "react";
import "../styles/projectunit.css";

function Project(props) {

    return (
        <div id="project">
            <a href={props.link}>
                <h2>{props.title}<span className="year"> ({props.year})</span></h2>
                <p>{props.description}</p>
            </a>
        </div>
    );
}


export default Project;