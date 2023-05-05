
import React from 'react';
import Leetcode from "../images/leetcode.svg";
import CodeChef from "../images/codechef.svg";
import Handbook from "../images/handbook.png";

const aboutme = {
    highlight: "Hi there! My name is Bhavuk and I'm an aspiring web developer. While I don't have any professional experience in web development, I'm passionate about coding and building websites.",
    technology: "I've completed some online tutorials and coursework on technologies such as React, Express, and mongooDB, and have worked on personal projects including ToDo List, Notes App, and Blog Website. I'm constantly seeking out new challenges and opportunities to learn and grow as a developer. I can also develope native(java) android Applications",
    buttering: "What I love about web development is the endless possibilities it offers. I'm excited to work on projects that can make a positive impact on people's lives and change the world for the better."
}

const data = {
    SkillsList: [
        {
            id: 1,
            icon: <i className="fa-brands fa-react fa-2xl"></i>,
            content: "React.js"
        },
        {
            id: 2,
            icon: <i className="fa-brands fa-square-js fa-2xl"></i>,
            content: "Express.js"
        },
        {
            id: 3,
            icon: <i className="fa-brands fa-git-alt fa-2xl"></i>,
            content: "Git"
        },
        {
            id: 4,
            icon: <i className="fa-brands fa-js fa-2xl"></i>,
            content: "jQuery"
        },
        {
            id: 5,
            icon: <i className="fa-solid fa-leaf fa-2xl"></i>,
            content: "MongoDB"
        },
        {
            id: 6,
            icon: <i className="fa-solid fa-leaf fa-2xl"></i>,
            content: "JavaScript"
        },
        {
            id: 7,
            icon: <i className="fa-solid fa-c fa-2xl"></i>,
            content: "C"
        },
        {
            id: 8,
            icon: <i className="fa-brands fa-java fa-2xl"></i>,
            content: "Java"
        },
        {
            id: 9,
            icon: <i className="fa-brands fa-android fa-2xl"></i>,
            content: "Android"
        },
        {
            id: 10,
            icon: <i className="fa-brands fa-linux fa-2xl"></i>,
            content: "Linux"
        }
    ],
    Projects: [
        {
            id: 1,
            title: "Notes App",
            description: "Front-end Notes App Created Using react",
            year: 2023,
            link: "https://github.com/desdemona2/Notes-React"
        },
        {
            id: 2,
            title: "Todo List",
            description: "A todo List app created using EJS, Express and MongoDB",
            year: 2023,
            link: "https://github.com/desdemona2/ToDoEJS"
        },
        {
            id: 3,
            title: "Blog Website",
            description: "A very basic Blog Website demonstrating use of EJS, Express and MongoDB",
            year: 2023,
            link: "https://github.com/desdemona2/Basic-Blog"
        },
        {
            id: 4,
            title: "HandBook",
            description: "A HandBook for different fields of Technology like App Development, Web Development, Linux Tools etc.",
            year: 2023,
            link: "https://desdemona2.github.io/bbz-zone/"
        },
        {
            id: 5,
            title: "CP Analyzer",
            description: "Native Android app(JAVA) to analyze performance of Individual in Competetive Programming",
            year: 2022,
            link: "https://github.com/desdemona2/CP-Analyzer"
        },
        {
            id: 6,
            title: "Chat App",
            description: "Native Android app to chat with random persons",
            year: 2022,
            link: "https://github.com/desdemona2/ChatApp"
        },
        {
            id: 7,
            title: "Real Time Face Recognition",
            description: "Real Time face recognition using Python and Open-CV",
            year: 2021,
            link: "https://github.com/desdemona2/FaceReco"
        }
    ],
    AboutMe: aboutme,
    ProfileLinks: [
        {
            id: 1,
            itemName: "Leetcode",
            link: "https://leetcode.com/failed_again/",
            icon: Leetcode
        },
        {
            id: 2,
            itemName: "CodeChef",
            link: "https://www.codechef.com/users/redheadhammer",
            icon: CodeChef
        },
        {
            id: 3,
            itemName: "Handbook",
            link: "https://desdemona2.github.io/bbz-zone/",
            icon: Handbook
        }
    ]
}

export default data;