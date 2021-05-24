import styled from 'styled-components'

const Connected = styled.div`
    text-align: center;
    margin-top: 10%;
    margin-bottom: 5%;
    color: white;
    text-shadow: 0px 0px 10px white;
    font-size: 30px;
`

const NavigationBar = styled.div`
    display: flex;
    height: 12vh;
    width: auto;
    justify-content: space-evenly;
`

const DesignCredit = styled.div`
    text-align: center;
    color: white;
    font-size: 18px;
    margin-bottom: 2%;
`

export default function Navbar(){
    return (
        <>
            <Connected>Stay connected</Connected>
            {/* <div className="connected">Stay connected</div> */}
                <NavigationBar>

            {/* <div className="navigation-bar"> */}
                <a href="https://github.com/aimee-liang"><img alt="github" src="https://img.icons8.com/nolan/80/github.png"/></a>
                <a href="https://aimee-liang.medium.com"><img alt="medium" src="https://img.icons8.com/nolan/80/medium-new.png"/></a>
                <a href="https://www.linkedin.com/in/aimeeliang/"><img alt="linkedin" src="https://img.icons8.com/nolan/80/linkedin.png"/></a>
                <a href="mailto:hello@aimeeliang.com"><img alt="email" src="https://img.icons8.com/nolan/80/email.png"/></a>
                </NavigationBar>
            {/* </div> */}

            <DesignCredit>
                <p>Design by Aimee Liang, 2021</p>
            </DesignCredit>
            {/* <div className="design-credit"> */}
            {/* </div> */}

        </>
    )
}
