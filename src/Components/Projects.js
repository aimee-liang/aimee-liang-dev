import React /*{useState} */ from "react"

const Projects = () => {

    // const [inHoverTetris, setHoverTetris] = useState(false)
    // const [inHoverUbike, setHoverUbike] = useState(false)
    // const [inHoverMunch, setHoverMunch] = useState(false)
    // const [inHoverFlatironTrivia, setHoverFlatironTrivia] = useState(false)
    // const [inHoverKLFinance, setHoverKLFinance] = useState(false)


    return (
        <>
            <div className="projects-header">Projects</div>

            <div className="projects_box">

                <div className="projects-container">

                    <div className="portfolio">

                        <div className="description">
                            <h2>Portfolio</h2>
                            <p>First deployment of personal portfolio website</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#CSS</span>
                            <span>#React</span>
                        </div>

                        <div className="portfolio-links">
                            {/* <a href="https://google.com"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a> */}
                            <a href="https://github.com/aimee-liang/aimee-liang-dev"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>

{/* next project */}

                    <div className="tetris">
                        {/* <div className="tetris-image">
                            {inHoverTetris && <img alt="tetris" src="/Tetris.png"/>}
                        </div> */}

                        <div className="description">
                            <h2>Tetris</h2>
                            <p>Classic game of Tetris built using vanilla JavaScript, CSS, and HTML</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#HTML</span>
                            <span>#CSS</span>
                            <span>#JavaScript</span>
                        </div>

                        <div className="tetris-links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/> */}
                            <a href="https://github.com/aimee-liang/tetris"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>

{/* next project */}

                    <div className="ubike">
                        {/* <div className="ubike-image">
                            {inHoverUbike && <img alt="ubike" src="/ubike.png" />}
                        </div> */}

                        <div className="description">
                            <h2>ubike</h2>
                            <p>Fullstack app to locate, check into, and favorite bike parking shelters throughout New York City</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#React</span>
                            <span>#Rails</span>
                            <span>#PostgresQL</span>
                            <span>#JWT</span>
                            <span>#BCrypt</span>
                            <span>#API</span>
                            <span>#CSS</span>
                            <span>#Material-UI</span>
                        </div>

                        <div className="ubike-links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/> */}
                            <a href="https://youtu.be/Fx4ioI88JUQ"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a>
                            <a href="https://github.com/aimee-liang/ubike-frontend"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>

{/* next project */}

                    <div className="munch">
                        {/* <div className="munch-image">
                            {inHoverMunch && <img alt="munch" src="" />}
                        </div> */}

                        <div className="description">
                            <h2>munch</h2>
                            <p>Fullstack App to search restaurants based on cuisine and neighborhood, create and delete reservations</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#React</span>
                            <span>#Rails</span>
                            <span>#Bootstrap</span>
                            <span>#CSS</span>
                            <span>#API</span>
                            <span>#PostgresQL</span>
                            <span>#JWT</span>
                            <span>#BCrypt</span>
                        </div>

                        <div className="munch-links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/> */}
                            <a href="https://youtu.be/goifKrjFAh8"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a>
                            <a href="https://github.com/aimee-liang/munch-frontend"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>
{/* next project */}

                    <div className="flatiron-trivia">
                        {/* <div className="flatiron-trivia-image">
                            {inHoverFlatironTrivia && <img alt="flatiron-trivia" src="Flatiron Trivia.png" />}
                        </div> */}

                        <div className="description">
                            <h2>Flatiron Trivia</h2>
                            <p>Fullstack Trivia app built using vanilla JavaScript</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#JavaScript</span>
                            <span>#Bootstrap</span>
                            <span>#Rails</span>
                            <span>#CSS</span>
                            <span>#PostgresQL</span>
                        </div>

                        <div className="flatiron-trivia-links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/>     */}
                            {/* <a href="docs.google.com"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a> */}
                            <a href="https://github.com/aimee-liang/flatiron-trivia-frontend"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>
{/* next project */}

                    <div className="kl-finance">
                        {/* <div className="kl-finance-image">
                            {inHoverKLFinance && <img alt="kl-finance" src="" />}
                        </div> */}

                        <div className="description">
                            <h2>KL-Finance</h2>
                            <p>Static finance website built using Rails backend</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#Ruby</span>
                            <span>#CSS</span>
                            <span>#Rails</span>
                            <span>#SQLite3</span>
                            <span>#Bootstrap</span>
                        </div>

                        <div className="kl-finance-links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/> */}
                            {/* <a href="docs.google.com"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a> */}
                            <a href="https://github.com/aimee-liang/Mod2-Final-Project-Financial-App"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>
                    </div>

{/* next project */}

                    <div className="avatar-cli">

                        <div className="description">
                            <h2>Avatar CLI</h2>
                            <p>Text adventure game based on James Cameron's movie</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#Ruby</span>
                            <span>#ActiveRecord</span>
                            <span>#SQLite3</span>
                        </div>

                        <div className="avatar-links">
                            <a href="https://github.com/Johnnie71/ruby-project-guidelines-nyc01-seng-ft-082420"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>
                    </div>

                </div>

        </div>

        </>
    )
}


export default Projects