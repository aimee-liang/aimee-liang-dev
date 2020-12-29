import React from "react"
import ProfilePic from "./ProfilePic"
import "../App.css"

const AboutMe = props => {
    return(
        <>
            <ProfilePic/>

            <div className="about-me-container">
                <p className="about-me anim-typewriter">Hi, I'm Aimee!</p>
                <p className="me-paragraph">I'm a Fullstack Web Developer and Software Engineer.
                <br></br>
                I’m a New Yorker born and raised, but spent a significant amount of my life in Washington D.C. 
                <br></br>
                That’s what shaped my decision to go into Tech. 
                <br></br>
                I knew I wanted a career where I could pursue my interests, and build meaningful solutions to help make people’s lives easier through innovative technologies. 
                </p>
            </div>
        </>
    )
}
export default AboutMe