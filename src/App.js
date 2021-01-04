import React from "react"
import Navbar from "./Components/Navbar"
// import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"
import {ThemeProvider} from "styled-components"
import {theme} from "./Components/Theme"

const App = () => {

  return(
    // <ThemeProvider theme={theme} toggleTheme={themeToggler}>
      <>
      <div className="app">
        {/* <button onClick={themeToggler}>Change Modes</button> */}
          {/* <Header /> */}
          <AboutMe/>
          <Projects/>
          <Navbar/>
      </div>
      </>
    // </ThemeProvider>
  )
}

export default App;
