import React, {useState} from "react"

const Projects = props => {

    const [inHover, setHover] = useState(false)

    return (
        <>
            <h3 className="projects-header">Projects</h3>

            <div className="projects-container">

                <div className="tetris" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> {/* onHover, display image source */}
                    <div className="tetris-image">
                        <img alt="tetris" src="/Tetris.png"/>
                    </div>

                    <div className="description">
                        <h2>Tetris</h2>
                        <p>Tetris built using vanilla JavaScript</p>
                    </div>

                    <div className="tetris-links">
                        <a href="https://github.com/aimee-liang/tetris"><img alt=""src="https://img.icons8.com/carbon-copy/40/000000/github.png"/></a>
                    </div>

                    <ul className="project-tech-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>


                <div className="ubike">
                    <div className="ubike-image">
                        <img alt="ubike" src="" />
                    </div>

                    <div className="description">
                        <h2>ubike</h2>
                        <p>App to find and check into bike parking shelters in New York City</p>
                    </div>

                    <div className="ubike-links">
                        <a href="https://github.com/aimee-liang/ubike-frontend"><img alt=""src="https://img.icons8.com/carbon-copy/40/000000/github.png"/></a>
                    </div>

                    <ul className="project-tech-list">
                        <li>React</li>
                        <li>Rails</li>
                        <li>API</li>
                        <li>CSS</li>
                        <li>Material-UI</li>
                    </ul>
                </div>


                <div className="munch">
                    <div className="munch-image">
                        <img alt="munch" src="" />
                    </div>

                    <div className="description">
                        <h2>munch</h2>
                        <p>App used to check out local restaurants based on cuisine and neighborhood, as well as create and delete reservations</p>
                    </div>

                    <div className="munch-links">
                        <a href="https://github.com/aimee-liang/munch-frontend"><img alt=""src="https://img.icons8.com/carbon-copy/40/000000/github.png"/></a>
                    </div>

                    <ul className="project-tech-list">
                        <li>React</li>
                        <li>Rails</li>
                        <li>React Bootstrap</li>
                        <li>API</li>
                    </ul>
                </div>


                <div className="flatiron-trivia">
                    <div className="flatiron-trivia-image">
                        <img alt="flatiron-trivia" src="" />
                    </div>

                    <div className="description">
                        <h2>Flatiron Trivia</h2>
                        <p>Trivia game built using vanilla JavaScript</p>
                    </div>

                    <div className="flatiron-trivia-links">
                        <a href="https://github.com/aimee-liang/flatiron-trivia-frontend"><img alt=""src="https://img.icons8.com/carbon-copy/40/000000/github.png"/></a>
                    </div>

                    <ul className="project-tech-list">
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>Rails</li>
                        <li>CSS</li>
                    </ul>
                </div>


                <div className="kl-finance">
                    <div className="kl-finance-image">
                        <img alt="kl-finance" src="" />
                    </div>

                    <div className="description">
                        <h2>KL-Finance</h2>
                        <p>Static finance website built using Rails backend</p>
                    </div>

                    <div className="kl-finance-links">
                        <a href="https://github.com/aimee-liang/Mod2-Final-Project-Financial-App"><img alt=""src="https://img.icons8.com/carbon-copy/40/000000/github.png"/></a>
                    </div>

                    <ul className="project-tech-list">
                        <li>Ruby</li>
                        <li>CSS</li>
                        <li>Rails</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>


            </div>

        </>
    )
}


export default Projects