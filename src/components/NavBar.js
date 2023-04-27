import React, { useState, useRef } from "react";
import HomeIcon from '@mui/icons-material/Home';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';

import "../styles/navbar.css"

function NavBar() {
    const [ selected, setSelected ] = useState("home");

    const navRef = useRef();

    function showNavBar() {
        navRef.current.classList.toggle("responsive-nav");
    }

    return (
        <header className="nav-bar">
            <div className="homeIcon"><HomeIcon sx={{fontSize: 30}} /></div>
            <nav ref={navRef}>
                <a 
                    onClick={() => setSelected("home")} 
                    className={selected==="home"?"selected nav-item":"nav-item" } 
                    href="#home">
                        Home
                </a>
                <a 
                    onClick={() => setSelected("skills")} 
                    className={selected==="skills"?"selected nav-item":"nav-item" } 
                    href="#Skills">
                        Skills
                </a>
                <a 
                    onClick={() => setSelected("projects")} 
                    className={selected==="projects"?"selected nav-item":"nav-item" } 
                    href="#Projects">
                        Projects
                </a>
                <a 
                    onClick={() => setSelected("about")} 
                    className={selected==="about"?"selected nav-item":"nav-item" } 
                    href="#About">
                        About
                </a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <HorizontalSplitOutlinedIcon />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <ViewWeekIcon />
            </button>
        </header>
    );
}

export default NavBar;
