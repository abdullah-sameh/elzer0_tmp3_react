import "../css_files/Features.css"
export default function Features() {
  const cardName = ["Quality", "Time", "Passion"]
  return (
    <section id="features">
      <h2 className="header">features</h2>
      <div className="container">
        {cardName.map((name, i) => {
          return (
            <div className="feature-card">
              <div className="img">
                <img
                  src={require(`../imgs/features/features-0${i + 1}.jpg`)}
                  alt=""
                />
              </div>
              <h3>{name}</h3>
              <p>
                Lorem ipsum dolor sit. Lorem ipsum dolor sit amet. Lorem, ipsum
                dolor.
              </p>
              <button>More</button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
