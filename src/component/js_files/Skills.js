import "../css_files/Skills.css"
import { useRef, useState, useEffect } from "react"

export default function Skills() {
  const content = [
    ["html", "80"],
    ["css", "85"],
    ["javaScript", "70"],
    ["python", "80"],
  ]
  const [span, setSpan] = useState([0, 0, 0, 0])
  const myRef = useRef()

  const [y, setY] = useState()

  const getPosition = () => {
    const y = myRef.current.offsetTop
    setY(y)
    if (window.scrollY >= y) {
      setSpan([content[0][1], content[1][1], content[2][1], content[3][1]])
    }
  }

  useEffect(() => {
    getPosition()
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", getPosition)
  }, [])

  return (
    <section id="skills" ref={myRef}>
      <h2 className="header">our skills</h2>
      <div className="container">
        <div className="left">
          <img src={require("../imgs/skills.png")} alt="skills img" />
        </div>
        <div className="right">
          {content.map((item, i) => {
            return (
              <div className="skill">
                <div className="text">
                  <h3>{item[0]}</h3>
                  <p>{item[1]}%</p>
                </div>
                <div className="progress" value="0" max="100">
                  <p style={{ width: span[i] + "%" }}></p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
