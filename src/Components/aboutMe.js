import React from "react"
import ProfilePic from "./ProfilePic"
import "../App.css"
import Typewriter from "typewriter-effect"

const AboutMe = () => {
    return(
        <div className="about">
            <ProfilePic/>

            <div className="about-me-container">

                <div className="typewriter">
                    <Typewriter options={{
                        strings: ["Hi, I'm Aimee."],
                        autoStart: true,
                        loop: true,
                    }} />
                </div>

                <div className="me">
                    <p className="me-paragraph">I'm a Full Stack Web Developer and Software Engineer, seeking opportunities to build meaningful and creative products to help make people’s lives easier. 
                    </p>
                </div>

            </div>

        </div>
    )
}
export default AboutMe