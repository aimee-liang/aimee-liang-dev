import React from "react"
import Navbar from "./Components/Navbar"
// import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"
// import {ThemeProvider} from "styled-components"
// import {GlobalStyles} from "./Components/globalStyles"
// import {theme} from "./Components/Theme"
// import {useDarkMode} from "./Components/useDarkMode"

const App = () => {

  // const [theme, mountedComponent] = useDarkMode()
  // const themeMode = theme === "light" ? lightTheme : darkTheme

  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light")
  // }

  return(
    // <ThemeProvider theme={theme} toggleTheme={themeToggler}>
      <>
      {/* <GlobalStyles/> */}
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
