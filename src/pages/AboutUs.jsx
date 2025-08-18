import { Layout } from "../components/Layout"
import "../styles/pages/AboutUs.css"

const AboutUs = () => {
  return (
    <Layout>
      <section className="about-section">
        <div className="about-cards-container">
          <div className="about-card">
            <h3>De qué trata el proyecto</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde, eaque eveniet animi sed quisquam exercitationem voluptatem reiciendis impedit officia quidem nostrum asperiores ullam esse, assumenda ducimus laborum quo at!</p>
          </div>

          <div className="about-card">
            <h3>A quién está dirigido</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, accusantium eveniet? Quaerat beatae mollitia illum perferendis, sed laudantium consectetur vero accusamus velit reprehenderit officia consequuntur ducimus ratione quasi ipsam error.</p>
          </div>

          <div className="about-card">
            <h3>Qué tecnologías se usaron</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia earum dolore reprehenderit, non impedit molestias, aut facilis quia consequuntur minus iusto enim, numquam voluptatibus. Ratione tempora placeat exercitationem hic laborum!</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export { AboutUs }