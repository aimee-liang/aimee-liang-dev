import React from "react"

const Projects = () => {

    return (
        <>
            <div className="projects-header">Projects</div>

            <div className="projects_box">

                <div className="projects-container">

                    <div className="project conscience">

                        <div className="description">
                            <img alt="conscience" src="/conscience.png"/>
                            <h2>conscience</h2>
                            <p>Frontend web app for a fictional design studio, incorporating glassmorphism</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#CSS</span>
                            <span>#HTML</span>
                            <span>#Mobile-Responsive</span>
                        </div>

                        <div className="links">
                            <a href="https://medium.com/design-bootcamp/how-to-make-glassmorphism-more-accessible-9121d816004c"><img alt="" src="https://img.icons8.com/nolan/60/medium-new.png"/></a>
                            <a href="https://aimee-liang.github.io/frontend-glassmorphism/"><img alt=""src="https://img.icons8.com/nolan/60/domain.png"/></a>
                            <a href="https://github.com/aimee-liang/frontend-glassmorphism"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                        </div>

                    <div className="project portfolio">

                        <div className="description">
                            <h2>Portfolio</h2>
                            <p>Deployment of personal portfolio website</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#CSS</span>
                            <span>#React</span>
                            <span>#Mobile-Responsive</span>
                            <span>Icons8</span>
                        </div>

                        <div className="links">
                            <a href="https://github.com/aimee-liang/aimee-liang-dev"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>

                    <div className="project tetris">

                        <div className="description">
                            <h2>Tetris</h2>
                            <p>Classic game of Tetris built using vanilla JavaScript, CSS, and HTML</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#HTML</span>
                            <span>#CSS</span>
                            <span>#JavaScript</span>
                        </div>

                        <div className="links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/> */}
                            <a href="https://youtu.be/xk9MYz-CMx8"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a>
                            <a href="https://github.com/aimee-liang/tetris"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>

                    <div className="project ubike">

                        <div className="description">
                            <h2>ubike</h2>
                            <p>Fullstack app to locate, check into, and favorite bike parking shelters throughout New York City</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#React</span>
                            <span>#Rails</span>
                            <span>#PostgreSQL</span>
                            <span>#React Map GL</span>
                            <span>#Chatbot</span>
                            <span>#JWT</span>
                            <span>#BCrypt</span>
                            <span>#API</span>
                            <span>#CSS</span>
                            <span>#Material-UI</span>
                        </div>

                        <div className="links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/> */}
                            <a href="https://youtu.be/Fx4ioI88JUQ"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a>
                            <a href="https://github.com/aimee-liang/ubike-frontend"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>

                    <div className="project munch">

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

                        <div className="links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/> */}
                            <a href="https://youtu.be/goifKrjFAh8"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a>
                            <a href="https://github.com/aimee-liang/munch-frontend"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>

                    <div className="project flatiron-trivia">

                        <div className="description">
                            <h2>Flatiron Trivia</h2>
                            <p>Fullstack Trivia app built using vanilla JavaScript</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#JavaScript</span>
                            <span>#Bootstrap</span>
                            <span>#Rails</span>
                            <span>#CSS</span>
                            <span>#PostgreSQL</span>
                        </div>

                        <div className="links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/>     */}
                            {/* <a href="docs.google.com"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a> */}
                            <a href="https://github.com/aimee-liang/flatiron-trivia-frontend"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>

                    </div>

                    <div className="project kl-finance">

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

                        <div className="links">
                            {/* <img alt=""src="https://img.icons8.com/nolan/60/web.png"/> */}
                            {/* <a href="docs.google.com"><img alt=""src="https://img.icons8.com/nolan/60/youtube-squared.png"/></a> */}
                            <a href="https://github.com/aimee-liang/Mod2-Final-Project-Financial-App"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>
                    </div>

                    <div className="project avatar-cli">

                        <div className="description">
                            <h2>Avatar CLI</h2>
                            <p>Text adventure game based on James Cameron's movie</p>
                        </div>

                        <div className="project-tech-list">
                            <span>#Ruby</span>
                            <span>#ActiveRecord</span>
                            <span>#SQLite3</span>
                        </div>

                        <div className="links">
                            <a href="https://github.com/Johnnie71/ruby-project-guidelines-nyc01-seng-ft-082420"><img alt="" src="https://img.icons8.com/nolan/60/github.png"/></a>
                        </div>
                    </div>

                </div>

        </div>

        </>
    )
}


export default Projects