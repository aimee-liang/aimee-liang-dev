import React from "react"
import ProfilePic from "./ProfilePic"
import "../App.css"

const AboutMe = props => {
    return(
        <>
            <ProfilePic/>

            <div className="about-me-container">
                <p className="about-me anim-typewriter">Hi, I'm Aimee!</p>
                <p className="me-paragraph">I'm a Fullstack Developer and Software Engineer based in New York City.
                <br></br>
                I'm looking to build meaningful and creative products to help make people’s lives easier. 
                </p>
            </div>
        </>
    )
}
export default AboutMe