import "./App.css"
import Header from "./component/js_files/Header"
import Article from "./component/js_files/Article"
import Gallery from "./component/js_files/Gallery"
import Features from "./component/js_files/Features"
import Testimonials from "./component/js_files/Testimonials"
import Team from "./component/js_files/Team"
import Services from "./component/js_files/Services"
import Skills from "./component/js_files/Skills"
import How from "./component/js_files/How"
import Events from "./component/js_files/Events"
import Plans from "./component/js_files/Plans"
import Video from "./component/js_files/Video"
import Stats from "./component/js_files/Stats"
import Discount from "./component/js_files/Discount"
import Footer from "./component/js_files/Footer"
import { useState } from "react"

function App() {
  const [icon, setIcon] = useState('light_mode')

  return (
    <>
      <button id="mode" onClick={() => {
        if (icon === "dark_mode") {
          setIcon(`light_mode`)
          document.documentElement.setAttribute("data-mode", "light")
        } else {
          setIcon(`dark_mode`)
          document.documentElement.setAttribute("data-mode", "dark")
        }
      }}>
        <i className="material-icons">{icon}</i>
      </button>
      <Header />
      <main>
        <Article />
        <Gallery />
        <Features />
        <Testimonials />
        <Team />
        <Services />
        <Skills />
        <How />
        <Events />
        <Plans />
        <Video />
        <Stats />
        <Discount />
      </main>
      <Footer />
    </>
  )
}

export default App
