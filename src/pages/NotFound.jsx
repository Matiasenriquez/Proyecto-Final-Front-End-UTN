import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"
import "../styles/pages/NotFound.css"

const NotFound = () => {
  return (
    <Layout>
      <section className="not-found-container">
        <h1>404</h1>
        <p>¡Página no encontrada!</p>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <p>Verificá la URL o volvé al inicio.</p>
        <Link to="/">Ir a inicio</Link>
      </section>
    </Layout>
  )
}
export { NotFound }