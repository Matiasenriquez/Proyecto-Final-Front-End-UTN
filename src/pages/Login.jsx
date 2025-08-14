import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import "../styles/pages/Login.css"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")

    console.log({ username, password })
    const isLogin = await login(username, password)

    if (isLogin) {
      setUsername("")
      setPassword("")
      navigate("/")
    } else {
      setError("Usuario o contraseña incorrectos")
    }
  }

  return (
    <Layout>
      <section className="login-section">
        <div className="login-card">
          <h2>Inicia sesión</h2>
          <p className="login-intro">Bienvenido de nuevo a la tienda de la UTN</p>
          <p className="login-info">Datos para ingresar: usuario <b>johnd</b> - Pass: <b>m38rmF$</b></p>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Nombre de usuario:</label>
              <input
                type="text"
                placeholder="Ingresa tu usuario"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Contraseña:</label>
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button type="submit">Ingresar</button>
          </form>

          {error && <p className="error-msg">{error}</p>}
        </div>
      </section>
    </Layout>
  )
}

export { Login }