import React from "react";
import Unit from "./SkillUnit";
import Data from "./Data";


import "../styles/skills.css";

function Skills() {

    return (
        <div id="Skills">
            <h1>Skills</h1>
            <div className="list">
                {Data.SkillsList.map(item => <Unit key={item.id} icon={item.icon} content={item.content}/>)}
            </div>
        </div>
    );
}


export default Skills;
