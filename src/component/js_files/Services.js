import "../css_files/Services.css"

export default function Services() {
  const names = [
    "security",
    "fixing issues",
    "location",
    "coding",
    "security",
    "marketing",
  ]
  const icons = ["security", "handyman", "place", "code", "palette", "campaign"]

  return (
    <section id="services">
      <h2 className="header">services</h2>
      <div className="container">
        {names.map((name, i) => {
          return (
            <div className="card">
              <i className="material-icons">{icons[i]}</i>
              <h2>{name}</h2>
              <div className="footer">
                <p>0{Number(i) + 1}</p>
                <a href="#more">Details</a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
