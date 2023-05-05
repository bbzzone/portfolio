import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import ScroollToTop from "./ScrollToTop";

function App() {
    return (
        <>
            <ScroollToTop />
            <NavBar />
            <Home />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
}


export default App;