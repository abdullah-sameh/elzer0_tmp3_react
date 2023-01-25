import "../css_files/Article.css"

export default function Article() {
  return (
    <section id="article">
      <h2 className="header">articles</h2>
      <div className="container">
        {[...Array(8)].map((ele, i) => {
          return (
            <div className="card">
              <img src={require(`../imgs/article/cat-0${i + 1}.jpg`)} alt="" />
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, fuga.
              </p>
              <footer>
                <a href="#moh">read more</a>
                <a href="#moh">
                  <i className="material-icons">arrow_right_alt</i>
                </a>
              </footer>
            </div>
          )
        })}
      </div>
    </section>
  )
}
