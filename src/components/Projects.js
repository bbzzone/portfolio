import React from "react";
import "../styles/projects.css";
import ProjectUnit from "./ProjectUnit";
import Data from "./Data";

function Projects() {

    return (
        <div id="Projects">
            <h1>Projects</h1>
            <div className="projectlist">
                {Data.Projects.map(
                    item => <ProjectUnit 
                        title={item.title} 
                        description={item.description} 
                        key={item.id}
                        link={item.link}
                        year={item.year}
                        />
                    )}
            </div>
        </div>
    );
}

export default Projects;
