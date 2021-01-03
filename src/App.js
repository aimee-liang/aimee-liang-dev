import React, {useState} from "react"
import Navbar from "./Components/Navbar"
// import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"
import {ThemeProvider} from "styled-components"
import {GlobalStyles} from "./Components/globalStyles"
import {lightTheme, darkTheme} from "./Components/Themes"

const App = () => {

  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return(
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
      <>
      <GlobalStyles/>
      <div className="app">
        <button onClick={themeToggler}>Change Modes</button>
          {/* <Header /> */}
          <AboutMe/>
          <Projects/>
          <Navbar/>
      </div>
      </>
    </ThemeProvider>
  )
}

export default App;
