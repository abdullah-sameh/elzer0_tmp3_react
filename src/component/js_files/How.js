import "../css_files/How.css"

export default function How() {
  const secNames = ["Business Analysis", "arcticuture", "development"]
  return (
    <section id="how">
      <h2 className="header">how it works?</h2>
      <div className="container">
        <div className="left">
          <img src={require("../imgs/how/work-steps.png")} alt="work-steps" />
        </div>
        <div className="right">
          {secNames.map((ele, i) => {
            return (
              <section>
                <img
                  src={require(`../imgs/how/work-steps-${i + 1}.png`)}
                  alt=""
                />
                <h2>{ele}</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  suscipit atque libero facilis. Similique reiciendis
                  repudiandae iste unde esse sapiente neque doloribus, nostrum
                  quam aliquid!
                </p>
              </section>
            )
          })}

        </div>
      </div>
    </section>
  )
}
