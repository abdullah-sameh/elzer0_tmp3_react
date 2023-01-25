import "../css_files/Header.css"
import { useState } from "react"

export default function Header() {
  const [value, setValue] = useState("none")
  const [opacity, setOpacity] = useState("0")

  return (
    <header>
      <nav>
        <div className="container">
          <h2 className="left">Bdbd</h2>
          <section className="right">
            <a href="#article">Articles</a>
            <a href="#gallery">Gallery</a>
            <a href="#features">Features</a>
            <a
              href="#other"
              onMouseOver={() => {
                setValue("grid")
                setOpacity("1")
              }}
              onMouseOut={() => {
                setValue("none")
                setOpacity("0")
              }}
            >
              Other Links
            </a>
          </section>
          {/* this section linked with <a>other</a> by js */}
          <section
            className="pop-other-links"
            style={{ display: value, opacity: opacity }}
            onMouseOver={() => {
              setValue("grid")
              setOpacity("1")
            }}
            onMouseOut={() => {
              setValue("none")
              setOpacity("0")
            }}
          >
            <section>
              <img src={require("../imgs/megamenu.png")} alt="megamenu" />
            </section>
            <section>
              <a href="#testimonials">
                <i className="material-icons">content_paste</i>
                Testimonials
              </a>
              <a href="#team">
                <i className="material-icons">forum</i>
                Team Members
              </a>
              <a href="#services">
                <i className="material-icons">person</i>
                Services
              </a>
              <a href="#skills">
                <i className="material-icons">apartment</i>
                Our Skills
              </a>
              <a href="#how">
                <i className="material-icons">check_circle_outline</i>
                How It Work
              </a>
            </section>
            <section>
              <a href="#events">
                <i className="material-icons">event</i>
                Events
              </a>
              <a href="#plans">
                <i className="material-icons">list</i>
                Pricing Plans
              </a>
              <a href="#video">
                <i className="material-icons">play_circle_outline</i>
                Top Videos
              </a>
              <a href="#stats">
                <i className="material-icons">query_stats</i>
                Stats
              </a>
              <a href="#discount">
                <i className="material-icons">discount</i>
                Request A Discount
              </a>
            </section>
          </section>
        </div>
      </nav>
      <main>
        <div className="container">
          <section>
            <h1>Hello There,</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id itaque
              alias veritatis minus architecto aut?
            </p>
          </section>
          <section>
            <img src={require("../imgs/landing-image.png")} alt="" />
          </section>
          <section>
            <a href="#article">
              <i className="material-icons">keyboard_double_arrow_down</i>
            </a>
          </section>
        </div>
      </main>
    </header>
  )
}
