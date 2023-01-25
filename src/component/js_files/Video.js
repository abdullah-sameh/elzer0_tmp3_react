import { useState } from "react"
import "../css_files/Video.css"

export default function Video() {
  const [show, setShow] = useState("Everything about The virtual hosts")

  return (
    <section id="video">
      <h2 className="header">top videos</h2>
      <div className="container">
        <div>
          <div className="left">
            <h2>
              Top Videos <i className="material-icons">swap_horiz</i>
            </h2>
            <a
              href="#videoNone"
              onClick={() => {
                setShow("how to creat sub domain")
              }}
            >
              how to creat sub domain
            </a>
            <a
              href="#videoNone"
              onClick={() => {
                setShow("playing with DNS")
              }}
            >
              playing with DNS
            </a>
            <a
              href="#videoNone"
              onClick={() => {
                setShow("every thing with virtual hosts")
              }}
            >
              every thing with virtual hosts
            </a>
            <a
              href="#videoNone"
              onClick={() => {
                setShow("how to monitor your website")
              }}
            >
              how to monitor your website
            </a>
            <a
              href="#videoNone"
              onClick={() => {
                setShow("Uncharted Beating The Last Boss")
              }}
            >
              Uncharted Beating The Last Boss
            </a>
            <a
              href="#videoNone"
              onClick={() => {
                setShow("Ys Oath In Felghana Overview")
              }}
            >
              Ys Oath In Felghana Overview
            </a>
            <a
              href="#videoNone"
              onClick={() => {
                setShow("Ys Series All Games Ending")
              }}
            >
              Ys Series All Games Ending
            </a>
          </div>
          <div className="right">
            <img src={require("../imgs/video-preview.jpg")} alt="" />
            <p id="showedVideo">{show}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
