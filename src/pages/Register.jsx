import { useState } from "react"
import { Layout } from "../components/Layout"
import "../styles/pages/Register.css"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/UserContext"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const navigate = useNavigate()
  const { register } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("Debes completar todos los campos")
      return
    }

    try {
      await register(username, email, password)
      setSuccess("Usuario registrado con éxito")
      setUsername("")
      setEmail("")
      setPassword("")
      setTimeout(() => navigate("/"), 2000)
    } catch (err) {
      setError("Hubo un error en el registro del usuario")
    }
  }

  return (
    <Layout>
      <section className="register-section">
        <div className="register-card">
          <h2>Registro de Usuario</h2>
          <p className="register-intro">Completa el formulario para crear tu cuenta</p>

          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label>Nombre de usuario: </label>
              <input
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Correo electrónico: </label>
              <input
                type="email"
                placeholder="Ingresa tu correo"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Contraseña: </label>
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button type="submit">Registrarse</button>
          </form>

          {error && <p className="error-msg">{error}</p>}
          {success && <p className="success-msg">{success}</p>}
        </div>
      </section>
    </Layout>
  )
}

export { Register }