import React from "react"
import ProfilePic from "./ProfilePic"

const AboutMe = props => {
    return(
        <>
            <ProfilePic/>

            <div className = "about-me container">
                <p className="about-me animation-type">Hi, I'm Aimee!</p>
                <p className="about-me-p">I'm a Fullstack Web Developer and Software Engineer. I love coding, traveling, and learning. 
                <br></br>
                I’m a New Yorker born and raised, but spent a significant amount of my life in Washington D.C. 
                <br></br>
                That’s what shaped my decision to go into Tech. 
                <br></br>
                I knew I wanted a career where I could pursue my interests and find something that would align with my values, 
                <br></br>
                and where I could build meaningful and creative solutions to help make people’s lives easier through innovative technologies. 
                </p>
            </div>
        </>
    )
}
export default AboutMe