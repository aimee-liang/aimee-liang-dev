import React from "react"
import ProfilePic from "./ProfilePic"

const AboutMe = props => {
    return(
        <>
            <ProfilePic/>

            <p className = "about-me container">
                Hello! I’m Aimee, a Fullstack Web Developer and Software Engineer. I love coding, traveling, and learning everything I can under the sun. 
                I’m a New Yorker born and raised, but spent a significant amount of my life in Washington D.C. That’s what shaped my decision to go into Tech. 
                I knew I wanted a career where I could pursue my interests and find something that would align with my values, and where I could build meaningful and creative solutions to help make people’s lives easier through innovative technologies. 
                I am a graduate of The George Washington University and Flatiron School. 
            </p>
        </>
    )
}
export default AboutMe