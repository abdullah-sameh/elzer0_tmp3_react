import "../css_files/Footer.css"

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <section>
          <h2>bdbd</h2>
          <div className="icons">
            <a href="#none">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#none">
              <i className="fa fa-github"></i>
            </a>
            <a href="#none">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quis
            provident temporibus, dolore hic dolor rerum facilis cumque nemo
            tenetur?
          </p>
        </section>
        <section>
          <a href="#none">
            <i className="material-icons">double_arrow</i> Important Link 1
          </a>
          <a href="#none">
            <i className="material-icons">double_arrow</i> Important Link 2
          </a>
          <a href="#none">
            <i className="material-icons">double_arrow</i> Important Link 3
          </a>
          <a href="#none">
            <i className="material-icons">double_arrow</i> Important Link 4
          </a>
          <a href="#none">
            <i className="material-icons">double_arrow</i> Important Link 5
          </a>
        </section>
        <section>
          <p>
            <i className="material-icons">location_on</i>
            <span>Mansoura Qism 2, El Mansoura, Dakahlia Governorate</span>
          </p>
          <p>
            <i className="material-icons">timer</i>
            <span>Business Hours: From 10:00 To 18:00</span>
          </p>
          <p>
            <i className="material-icons">phone</i>
            <span>+20123456789 +20198765432</span>
          </p>
        </section>
        <section>
          {[...Array(6)].map((ele, i) => {
            return (
              <img
                src={require(`../imgs/footer/gallery-0${i + 1}.png`)}
                alt="img"
              />
            )
          })}
        </section>
      </div>
      <div className="madeWith">Made With BDBD</div>
    </footer>
  )
}
