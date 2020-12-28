import React from "react"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"

const App = props => {
  return(
    <>
        <Navbar/>
        <AboutMe/>
        <Projects/>
    </>
  )
}

export default App;
