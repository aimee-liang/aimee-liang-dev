import React, {useState} from "react"

const Projects = () => {

    const [inHoverTetris, setHoverTetris] = useState(false)
    const [inHoverUbike, setHoverUbike] = useState(false)
    const [inHoverMunch, setHoverMunch] = useState(false)
    const [inHoverFlatironTrivia, setHoverFlatironTrivia] = useState(false)
    const [inHoverKLFinance, setHoverKLFinance] = useState(false)


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

                        <ul className="project-tech-list">
                            <li>CSS</li>
                            <li>React</li>
                            <li>Icons8</li>
                        </ul>

                        <div className="portfolio-links">
                            <a href="https://google.com"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a>
                            <a href="https://github.com/aimee-liang/aimee-liang-dev"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>

{/* next project */}

                    <div className="tetris" onMouseEnter={() => setHoverTetris(true)} onMouseLeave={() => setHoverTetris(false)}>
                        {/* <div className="tetris-image">
                            {inHoverTetris && <img alt="tetris" src="/Tetris.png"/>}
                        </div> */}

                        <div className="description">
                            <h2>Tetris</h2>
                            <p>Classic game of Tetris built using vanilla JavaScript</p>
                        </div>

                        <ul className="project-tech-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>

                        <div className="tetris-links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/> */}
                            <a href="https://github.com/aimee-liang/tetris"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>

{/* next project */}

                    <div className="ubike" onMouseEnter={() => setHoverUbike(true)} onMouseLeave={()=> setHoverUbike(false)}>
                        {/* <div className="ubike-image">
                            {inHoverUbike && <img alt="ubike" src="/ubike.png" />}
                        </div> */}

                        <div className="description">
                            <h2>ubike</h2>
                            <p>Fullstack app to locate, check into, and favorite bike parking shelters throughout New York City</p>
                        </div>

                        <ul className="project-tech-list">
                            <li>React</li>
                            <li>Rails</li>
                            <li>PostgresQL</li>
                            <li>JWT</li>
                            <li>BCrypt</li>
                            <li>API</li>
                            <li>CSS</li>
                            <li>Material-UI</li>
                        </ul>

                        <div className="ubike-links">
                            <img alt=""src="https://img.icons8.com/nolan/60/web.png"/>
                            <a href="https://youtu.be/Fx4ioI88JUQ"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a>
                            <a href="https://github.com/aimee-liang/ubike-frontend"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>

{/* next project */}

                    <div className="munch" onMouseEnter={() => setHoverMunch(true)} onMouseLeave={()=> setHoverMunch(false)}>
                        {/* <div className="munch-image">
                            {inHoverMunch && <img alt="munch" src="" />}
                        </div> */}

                        <div className="description">
                            <h2>munch</h2>
                            <p>Fullstack App to search restaurants based on cuisine and neighborhood, create and delete reservations</p>
                        </div>

                        <ul className="project-tech-list">
                            <li>React</li>
                            <li>Rails</li>
                            <li>React Bootstrap</li>
                            <li>CSS</li>
                            <li>API</li>
                            <li>PostgresQL</li>
                            <li>JWT</li>
                            <li>BCrypt</li>
                        </ul>

                        <div className="munch-links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/> */}
                            <a href="docs.google.com"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a>
                            <a href="https://github.com/aimee-liang/munch-frontend"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>
{/* next project */}

                    <div className="flatiron-trivia" onMouseEnter={() => setHoverFlatironTrivia(true)} onMouseLeave={()=> setHoverFlatironTrivia(false)}>
                        {/* <div className="flatiron-trivia-image">
                            {inHoverFlatironTrivia && <img alt="flatiron-trivia" src="Flatiron Trivia.png" />}
                        </div> */}

                        <div className="description">
                            <h2>Flatiron Trivia</h2>
                            <p>Fullstack Trivia app built using vanilla JavaScript</p>
                        </div>

                        <ul className="project-tech-list">
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>Rails</li>
                            <li>CSS</li>
                            <li>PostgresQL</li>
                        </ul>

                        <div className="flatiron-trivia-links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/>     */}
                            <a href="docs.google.com"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a>
                            <a href="https://github.com/aimee-liang/flatiron-trivia-frontend"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>
{/* next project */}

                    <div className="kl-finance" onMouseEnter={() => setHoverKLFinance(true)} onMouseLeave={()=> setHoverKLFinance(false)}>
                        {/* <div className="kl-finance-image">
                            {inHoverKLFinance && <img alt="kl-finance" src="" />}
                        </div> */}

                        <div className="description">
                            <h2>KL-Finance</h2>
                            <p>Static finance website built using Rails backend</p>
                        </div>

                        <ul className="project-tech-list">
                            <li>Ruby</li>
                            <li>CSS</li>
                            <li>Rails</li>
                            <li>SQLite3</li>
                            <li>Bootstrap</li>
                        </ul>

                        <div className="kl-finance-links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/> */}
                            <a href="docs.google.com"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a>
                            <a href="https://github.com/aimee-liang/Mod2-Final-Project-Financial-App"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>
                    </div>

{/* next project */}

                    <div className="avatar-cli">

                        <div className="description">
                            <h2>Avatar CLI</h2>
                            <p>Text adventure game based on James Cameron's movie</p>
                        </div>

                        <ul className="project-tech-list">
                            <li>Ruby</li>
                            <li>ActiveRecord</li>
                            <li>SQLite3</li>
                        </ul>

                        <div className="avatar-links">
                            <a href="docs.google.com"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a>
                            <a href="https://github.com/Johnnie71/ruby-project-guidelines-nyc01-seng-ft-082420/tree/JohnnieG/app"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>
                    </div>

                </div>

        </div>

        </>
    )
}


export default Projects