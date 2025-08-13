import "../styles/components/Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">

        {/* Logo y descripción */}
        <div className="footer-section">
          <div className="footer-logo-container">
            <img
              src="https://quois.com/wp-content/uploads/2021/08/eCommerce-1.png"
              alt="Logo Tienda"
              className="footer-logo"
            />
            <h4>Tienda de la UTN</h4>
          </div>
          <p>La posible competencia de mercadolibre.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Seguinos en:</h4>
          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tienda de la UTN. Sitio desarrollado por Gabriel Alberini y Enriquez Matias Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export { Footer }