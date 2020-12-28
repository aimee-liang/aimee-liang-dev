import React from "react"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"

const App = props => {
  return(
    <>
        <Navbar/>
        <Header />
        <AboutMe/>
        <Projects/>
    </>
  )
}

export default App;
