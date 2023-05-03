
import React from "react";
import "../styles/skillunit.css";

function Skill(props) {

    return (
        <div id="skill">
            {props.icon}
            <p>{props.content}</p>
        </div>
    );
}

export default Skill;