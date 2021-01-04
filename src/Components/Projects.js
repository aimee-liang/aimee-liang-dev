import React, {useState} from "react"
// import 'semantic-ui-css/semantic.min.css'
// import {Button} from "semantic-ui-react"

const Projects = props => {

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
                            <p>Portfolio website</p>
                        </div>

                        <div className="portfolio-links">
                            {/* <Button basic color="blue">
                                <Button content="View Repo" href="https://github.com/aimee-liang/aimee-liang-dev"></Button>
                            </Button> */}

                            <a href="https://google.com"><img alt=""src="https://img.icons8.com/carbon-copy/80/000000/domain.png"/></a>
                            <a href="https://github.com/aimee-liang/aimee-liang-dev"><img alt=""src="https://img.icons8.com/carbon-copy/60/000000/github.png"/></a>
                        </div>

                        <ul className="project-tech-list">
                            <li>CSS</li>
                            <li>React</li>
                            <li>Icons8</li>
                        </ul>
                    </div>

                    <div className="tetris" onMouseEnter={() => setHoverTetris(true)} onMouseLeave={() => setHoverTetris(false)}>
                        {/* <div className="tetris-image">
                            {inHoverTetris && <img alt="tetris" src="/Tetris.png"/>}
                        </div> */}

                        <div className="description">
                            <h2>Tetris</h2>
                            <p>Tetris built using vanilla JavaScript</p>
                        </div>

                        <div className="tetris-links">
                            <a href="https://google.com"><img alt=""src="https://img.icons8.com/carbon-copy/80/000000/domain.png"/></a>
                            <a href="https://github.com/aimee-liang/tetris"><img alt=""src="https://img.icons8.com/carbon-copy/60/000000/github.png"/></a>
                        </div>

                        <ul className="project-tech-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>


                    <div className="ubike" onMouseEnter={() => setHoverUbike(true)} onMouseLeave={()=> setHoverUbike(false)}>
                        {/* <div className="ubike-image">
                            {inHoverUbike && <img alt="ubike" src="/ubike.png" />}
                        </div> */}

                        <div className="description">
                            <h2>ubike</h2>
                            <p>Fullstack app to find and check into bike parking shelters in New York City</p>
                        </div>

                        <div className="ubike-links">
                            <a href="https://github.com/aimee-liang/ubike-frontend"><img alt=""src="https://img.icons8.com/carbon-copy/60/000000/github.png"/></a>
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
                    </div>


                    <div className="munch" onMouseEnter={() => setHoverMunch(true)} onMouseLeave={()=> setHoverMunch(false)}>
                        {/* <div className="munch-image">
                            {inHoverMunch && <img alt="munch" src="" />}
                        </div> */}

                        <div className="description">
                            <h2>munch</h2>
                            <p>Fullstack App to search restaurants based on cuisine and neighborhood, create and delete reservations</p>
                        </div>

                        <div className="munch-links">
                            <a href="https://github.com/aimee-liang/munch-frontend"><img alt=""src="https://img.icons8.com/carbon-copy/60/000000/github.png"/></a>
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
                    </div>


                    <div className="flatiron-trivia" onMouseEnter={() => setHoverFlatironTrivia(true)} onMouseLeave={()=> setHoverFlatironTrivia(false)}>
                        {/* <div className="flatiron-trivia-image">
                            {inHoverFlatironTrivia && <img alt="flatiron-trivia" src="Flatiron Trivia.png" />}
                        </div> */}

                        <div className="description">
                            <h2>Flatiron Trivia</h2>
                            <p>Fullstack Trivia app built using JavaScript</p>
                        </div>

                        <div className="flatiron-trivia-links">
                            <a href="https://github.com/aimee-liang/flatiron-trivia-frontend"><img alt=""src="https://img.icons8.com/carbon-copy/60/000000/github.png"/></a>
                        </div>

                        <ul className="project-tech-list">
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>Rails</li>
                            <li>CSS</li>
                            <li>PostgresQL</li>
                        </ul>
                    </div>


                    <div className="kl-finance" onMouseEnter={() => setHoverKLFinance(true)} onMouseLeave={()=> setHoverKLFinance(false)}>
                        {/* <div className="kl-finance-image">
                            {inHoverKLFinance && <img alt="kl-finance" src="" />}
                        </div> */}

                        <div className="description">
                            <h2>KL-Finance</h2>
                            <p>Static finance website built using Rails backend</p>
                        </div>

                        <div className="kl-finance-links">
                            <a href="https://github.com/aimee-liang/Mod2-Final-Project-Financial-App"><img alt=""src="https://img.icons8.com/carbon-copy/60/000000/github.png"/></a>
                        </div>

                        <ul className="project-tech-list">
                            <li>Ruby</li>
                            <li>CSS</li>
                            <li>Rails</li>
                            <li>SQLite3</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>

                </div>

        </div>

        </>
    )
}


export default Projects