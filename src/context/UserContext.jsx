import { createContext, useContext, useState } from "react"

const UserContext = createContext()

const UserProvider = (props) => {
  const [user, setUser] = useState(null)

  const login = async (username, password) => {
    // realizar una petición al backend 
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      const token = await response.json()
      setUser(true)
      return token
    } else {
      return false
    }
  }

  const logout = () => {
    setUser(null)
  }

  //Implementación de formulario de registro de usuarios segun consigna.

  const register = async (username, email, password) => {
    const idUser = crypto.randomUUID()
    console.log(`id: ${idUser}, nombre de usuario: ${username}, correo: ${email}, password: ${password}`)
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ idUser, username, email, password })

      })
      const data = await response.json()
      if (response.ok) {
        setUser(true)
        console.log("Usuario registrado", data)
      }
    }
    catch (error) {
      console.log("Error en el registro del usuario", error)
    }

  }

  return (
    <UserContext.Provider value={{ login, logout, register, user }}>
      {props.children}
    </UserContext.Provider>
  )
}

const useAuth = () => useContext(UserContext)

export { UserProvider, useAuth }