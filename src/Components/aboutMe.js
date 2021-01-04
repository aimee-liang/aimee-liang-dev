import React from "react"
import ProfilePic from "./ProfilePic"
import "../App.css"

const AboutMe = props => {
    return(
        <div className="about">
            <ProfilePic/>

            <div className="about-me-container">
                <h3 className="about-me anim-typewriter">Hi, I'm Aimee!</h3>
                <p className="me-paragraph">I'm a Fullstack Developer and Software Engineer based in New York City.
                <br></br>
                I'm seeking opportunities to build meaningful and creative products to help make people’s lives easier. 
                </p>
            </div>

        </div>
    )
}
export default AboutMe