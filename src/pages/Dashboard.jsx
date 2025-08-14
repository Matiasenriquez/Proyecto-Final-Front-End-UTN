import { useState } from "react"
import { Layout } from "../components/Layout"
import "../styles/pages/Dashboard.css"

const Dashboard = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!name || !price || !description) {
      setError("Debes completar todos los campos")
      return
    }

    if (name.length < 3) {
      setError("El nombre debe tener al menos 4 caracteres")
      return
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: price,
      description: description,
      category: "",
      image: ""
    }

    // petición al backend mediante fetch -> método POST https://fakeproductapi.com/products
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    const data = await response.json()
    setProduct(data)
    setName("")
    setPrice("")
    setDescription("")
  }

  return (
    <Layout>
      <section className="dashboard-section">
        <div className="dashboard-card">
          <h2>Panel de Administración</h2>
          <p className="dashboard-intro">Cargar nuevo producto en la tienda</p>

          <form onSubmit={handleSubmit} className="dashboard-form">
            <div className="form-group">
              <label>Nombre del producto:</label>
              <input
                type="text"
                name="nombre"
                placeholder="Ej: Camiseta UTN"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="form-group">
              <label>Precio:</label>
              <input
                type="number"
                name="precio"
                placeholder="Ej: 1999"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>

            <div className="form-group">
              <label>Descripción:</label>
              <textarea
                name="descripcion"
                rows="4"
                placeholder="Describe el producto..."
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>

            {error && <p className="error-msg">{error}</p>}

            <button type="submit">Guardar producto</button>
          </form>

          {product && (
            <div className="product-preview">
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              <p>{product.description}</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export { Dashboard }