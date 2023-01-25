import "../css_files/Testimonials.css"

export default function Testimonials() {
  const names = [
    "mohamed ahmed",
    "fayed emad",
    "ibrahim mohamed",
    "hazem khaled",
    "yasser shahin",
    "ali abdo",
  ]

  const jobs = [
    "full stack developer",
    "front-end developer",
    "back-end developer",
    "UI & UX developer",
    "devOps developer",
    "tester engineer",
  ]

  return (
    <section id="testimonials">
      <h2 className="header">testimonials</h2>
      <div className="container">
        {names.map((name, i) => {
          return (
            <div className="test-card">
              <img
                src={require(`../imgs/testimonials/avatar-0${i + 1}.png`)}
                alt=""
              />
              <h3>{name}</h3>
              <p>{jobs[i]}</p>
              <p>
                {[...Array(5)].map(() => {
                  return <i className="material-icons">star</i>
                })}
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus et quae soluta. Quo minus optio sint suscipit
                aspernatur?
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
