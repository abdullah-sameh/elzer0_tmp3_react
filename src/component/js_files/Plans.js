import "../css_files/Plans.css"

export default function Plans() {
  const names = [
    ["Basic", 0],
    ["Advanced", 15],
    ["Professional", 25],
  ]

  return (
    <section id="plans">
      <h2 className="header">pricing plans</h2>
      <div className="container">
        {names.map((item, i) => {
          return (
            <div className="card">
              {i === 1 ? <span>most popular</span> : undefined} {/* for second div */}
              <h2>{item[0]}</h2>
              <i className="material-icons">storage</i>
              <h2>{item[1]}$</h2>
              <p>per month</p>
              <ul>
                <li>10GB HDD Space</li>
                <li>5 Email Addresses</li>
                <li>2 Subdomains</li>
                <li>4 Databases</li>
                <li>Basic Support</li>
              </ul>
              <button>choose plan</button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
