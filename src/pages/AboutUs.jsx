import { Layout } from "../components/Layout"
import "../styles/pages/AboutUs.css"

const AboutUs = () => {
  return (
    <Layout>
      <section className="about-section">
        <div className="about-cards-container">
          <div className="about-card">
            <h3>Sobre el Proyecto</h3>
            <p>Este proyecto es una aplicación de e-commerce desarrollada como entrega final de la primera etapa de la Diplomatura en Desarrollo Web Full Stack (UTN).</p>
            <p>Forma parte del módulo Desarrollador Web Front-End, en el cual, a lo largo de cinco meses, trabajamos en los contenidos de la diplomatura guiados por el profesor Gabriel Alberini.</p>
          </div>

          <div className="about-card">
            <h3>¿A quién está dirigido?</h3>
            <p>El proyecto es de acceso público, por lo que cualquier persona interesada puede participar y contribuir con sus conocimientos.</p>
            <p>Las colaboraciones son bienvenidas siempre que respeten los lineamientos establecidos y aporten mejoras que enriquezcan el proyecto.</p>
          </div>

          <div className="about-card" style={{ "list-style-type": "none" }}>
            <h3>Tecnologías utilizadas</h3>
            <li>HTML y CSS: Definición de la estructura y diseño de la aplicación.</li>
            <li>Git y GitHub: Control de versiones y colaboración en equipo.</li>
            <li>JavaScript y React: Desarrollo de la lógica del cliente y creación de componentes dinámicos.</li>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export { AboutUs }