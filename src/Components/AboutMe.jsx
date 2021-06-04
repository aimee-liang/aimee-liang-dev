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

const MeParagraph = styled.div`
    font-family: 'Cormorant Garamond', serif;
    font-size: 25px;
    color: white;
    margin-right: 10%;
`

const TypeWriterComponent = styled.div`
    margin-top: auto;
    font-family: 'Cutive Mono', monospace;
    font-size: 7vmax;
    line-height: 7vmax;
    color: white;
    text-shadow: 0px 0px 10px white;
    height: 12vmax;
`

export default function AboutMe (){
    return (
        <About>
        {/* <div className="about"> */}
            <ProfilePic/>
                <AboutMeContainer>
                {/* {<div className="about-me-container">} */}

                {/* <div className="typewriter"> */}
                <TypeWriterComponent>
                    <Typewriter options={{
                        strings: ["Hi, I'm Aimee."],
                        autoStart: true,
                        loop: true,
                    }} />
                </TypeWriterComponent>
                {/* </div> */}

                <div className="me">
                    <MeParagraph>
                        I'm a Full Stack Web Developer and Software Engineer, seeking opportunities to build meaningful and creative products to help make people’s lives easier. 
                    </MeParagraph>
                    {/* <p className="me-paragraph">I'm a Full Stack Web Developer and Software Engineer, seeking opportunities to build meaningful and creative products to help make people’s lives easier.  */}
                    {/* </p> */}
                </div>

                {/* {</div>} */}
                </AboutMeContainer>
        {/* </div> */}
        </About>
    )
}
