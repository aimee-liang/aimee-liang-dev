import React from "react"
import Navbar from "./Components/Navbar"
// import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"

const App = () => {

  return(

    <>
      <div className="app">
          {/* <Header /> */}
          <AboutMe/>
          <Projects/>
          <Navbar/>
      </div>
    </>
  )
}

export default App;
