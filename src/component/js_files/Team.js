import "../css_files/Team.css"

export default function Team() {
  return (
    <section id="team">
      <h2 className="header">team member</h2>
      <div className="container">
        {[...Array(8)].map((ele, i) => {
          return (
            <div className="team-card">
              <div className="img-icons">
                <img src={require(`../imgs/team/team-0${i + 1}.jpg`)} alt="" />
                <div className="icons">
                  <a href="facebook.com">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="twitter.com">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="linkedin.com">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="youtube.com">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </div>
              </div>
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
