import React from "react"

const Navbar = () => {
    return (
        <>
            <div className="connected">Stay connected</div>
            <div className="navigation-bar">
                <a href="https://github.com/aimee-liang"><img alt="github" src="https://img.icons8.com/nolan/80/github.png"/></a>
                <a href="https://aimee-liang.medium.com"><img alt="medium" src="https://img.icons8.com/nolan/80/medium-new.png"/></a>
                <a href="https://www.linkedin.com/in/aimeeliang/"><img alt="linkedin" src="https://img.icons8.com/nolan/80/linkedin.png"/></a>
                <a href="mailto:hello@aimeeliang.com"><img alt="email" src="https://img.icons8.com/nolan/80/email.png"/></a>
            </div>

            <div className="design-credit">
                <p>Design by Aimee Liang, 2021</p>
            </div>

        </>
    )
}

export default Navbar