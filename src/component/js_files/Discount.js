import '../css_files/Discount.css'

export default function Discount() {
  return (
    <section id="discount">
      <div className="left">
        <h2>we have a discount</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, tenetur minus! Eos architecto at impedit velit, ea quasi earum et aliquid. Laudantium, alias id hic voluptates recusandae dolorum quibusdam quis.</p>
        <img src={require("../imgs/discount.png")} alt="" />
      </div>
      <div className="right">
        <h2>request a discount</h2>
        <form>
          <input type="text" placeholder="your name"/>
          <input type="email" placeholder="your email"/>
          <input type="text" placeholder="your phone"/>
          <textarea cols="30" rows="10" placeholder="tell us about your needs" ></textarea>
          <input type="submit" value="Send"/>
        </form>
      </div>
    </section>
  )
}