import React, {useState, useEffect} from "react"
import Navbar from "./Components/Navbar"
// import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"
import {ThemeProvider} from "styled-components"
import {GlobalStyles} from "./Components/globalStyles"
import {lightTheme, darkTheme} from "./Components/Themes"

const App = () => {

  const [theme, setTheme] = lightTheme("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

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
