import "../css_files/Gallery.css"

export default function Gallery() {

  return (
    <section id="gallery">
      <h2 className="header">gallery</h2>

      <div className="container">
        {
          [...Array(6)].map((ele, i) => {
            return (
              <div className="img-card">
                <img
                  src={require(`../imgs/gallery/gallery-0${i+1}.png`)}
                  alt="gallery img"
                /> 
              </div>
            )
          })
        }
      </div>
    </section>
  )
}