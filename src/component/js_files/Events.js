import "../css_files/Events.css"

// function timeRemain(dateTo) {
//   let now = new Date()
//   let msDifference = dateTo.getTime() - now.getTime()

//   let secsDifference = Math.floor(msDifference / 1000)
//   let minsDifference = Math.floor(secsDifference / 60)
//   let hoursDifference = Math.floor(minsDifference / 60)
//   let daysDifference = Math.floor(hoursDifference / 24)

//   return {
//     seconds: secsDifference % 60,
//     minutes: minsDifference % 60,
//     hours: hoursDifference % 24,
//     days: daysDifference,
//   }
// }

export default function Events() {
  return (
    <section id="events">
      <h2 className="header">latest events</h2>
      <div className="container">
        <div className="left">
          <img src={require("../imgs/events.png")} alt="" />
        </div>
        <div className="right">
          <div className="head">
            <section>
              <h2>00</h2>
              <p>Days</p>
            </section>
            <section>
              <h2>00</h2>
              <p>Hours</p>
            </section>
            <section>
              <h2>00</h2>
              <p>Minutes</p>
            </section>
            <section>
              <h2>00</h2>
              <p>Seconds</p>
            </section>
          </div>
          <div className="tail">
            <h2>tech masters event 2023</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto vitae velit molestias soluta aut a dolorum. Quos esse
              aliquid dignissimos molestias! Nisi saepe expedita voluptatibus!
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <form>
          <input type="email" name="mail" placeholder="Enter your Email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </section>
  )
}
