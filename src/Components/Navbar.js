import React from "react"

const Navbar = () => {
    return (
        <>
            <div className="connected">Stay connected</div>
            <div className="navigation-bar">
                <a href="https://github.com/@aimee-liang"><img alt="" src="https://img.icons8.com/nolan/80/github.png"/></a>
                <a href="https://medium.com/@aimee_liang"><img alt="" src="https://img.icons8.com/nolan/80/medium-new.png"/></a>
                <a href="https://www.linkedin.com/in/aimeeliang/"><img alt="" src="https://img.icons8.com/nolan/80/linkedin.png"/></a>
                <a href="mailto:aimeeeliang@gmail.com"><img alt="" src="https://img.icons8.com/nolan/80/email.png"/></a>
            </div>

            <div className="design-credit">
                <p>Design by Aimee Liang</p>
            </div>

        </>
    )
}

export default Navbar