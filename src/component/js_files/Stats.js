import "../css_files/Stats.css"

export default function Stats() {
  const iconNames = [
    ["person", 150, "clients"],
    ["code", 135, "projects"],
    ["public", 50, "countries"],
    ["money", 50, "money"],
  ]

  return (
    <section id="stats">
      <h2>our awesome states</h2>
      <div className="container">
        {iconNames.map((item, i) => {
          return (
            <section>
              <i className="material-icons">{item[0]}</i>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </section>
          )
        })}
      </div>
    </section>
  )
}
