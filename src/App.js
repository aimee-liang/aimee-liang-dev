import React from "react"
import Navbar from "./Components/Navbar"
// import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"
import {ThemeProvider} from "styled-components"
import {GlobalStyles} from "./Components/globalStyles"
import {lightTheme, darkTheme} from "./Components/Themes"

const App = props => {

  const [theme, setTheme]
  return(
    <>
        {/* <Header /> */}
        <AboutMe/>
        <Projects/>
        <Navbar/>
    </>
  )
}

export default App;
