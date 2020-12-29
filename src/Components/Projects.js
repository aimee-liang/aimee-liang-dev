import React from "react"

const Projects = props => {
    return (
        <div className="projects-container">

            <h3>
                Projects
            </h3>

            <div className="tetris">
                <div className="tetris-image">
                    <img alt="tetris" src=""/>
                </div>
                <a href="https://github.com/aimee-liang/tetris">Repo</a>
            </div>

            <div className="ubike">
                <div className="ubike-image">
                    <img alt="ubike" src="" />
                </div>
                <a href="https://github.com/aimee-liang/ubike-frontend">Repo</a>
            </div>

            <div className="munch">
                <div className="munch-image">
                    <img alt="munch" src="" />
                </div>
                <a href="https://github.com/aimee-liang/munch-frontend">Repo</a>
            </div>

        </div>
    )
}


export default Projects