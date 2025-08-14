import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"
import { useEffect, useState } from "react"
import "../styles/components/Header.css"

const Header = () => {
  const { user, logout } = useAuth()
  const [darkMode, setDarkMode] = useState(false)

  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  return (
    <header>
      <nav>
        <div className="logo">
          <img
            src="https://quois.com/wp-content/uploads/2021/08/eCommerce-1.png"
            alt="Logo"
          />
          <Link
            to="/"
            style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Tienda de la UTN
          </Link>
        </div>

        <ul>
          {user && (
            <>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          )}
          {!user && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/registrate">Registrate</Link></li>
            </>
          )}

          {/* Botón para poner oscuro o claro */}
          <li>
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
            > Tema:
              {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }