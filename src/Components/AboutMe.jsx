import ProfilePic from "./ProfilePic"
import "../App.css"
import Typewriter from "typewriter-effect"
import styled from "styled-components"

const About = styled.div`
    margin-top: 5%;
    margin-left: 5%
`

const AboutMeContainer = styled.div`
    margin-left: 6%;
`

export default function AboutMe (){
    return (
        <About>
        {/* <div className="about"> */}
            <ProfilePic/>
                <AboutMeContainer>
                {/* {<div className="about-me-container">} */}

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

                {/* {</div>} */}
                </AboutMeContainer>
        {/* </div> */}
        </About>
    )
}
