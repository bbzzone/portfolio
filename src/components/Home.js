
import React, { useEffect, useState } from "react";
import ProfileImage from "../images/bbzzzs.png"

import "../styles/home.css"


function Home() {
    const [isVisible, setVisible] = useState(false);

    useEffect( () => {
        setVisible(true);
    }, [isVisible]);

    return (
        <section id="home">
            <img 
                src={ProfileImage}
                alt="profile_img"
                className={isVisible?"":"invisible"}
            />
            <p className="homeName">Hi, I'm Bhavuk</p>
            <h1>A WebDeveloper and Tech Enthusiast</h1>
            <p>I am looking for an Entry level position as a web developer in a dynamic firm which values my technical skills and provide scope for expanding my technical knowledge.</p>
        </section>
    )
}

export default Home;