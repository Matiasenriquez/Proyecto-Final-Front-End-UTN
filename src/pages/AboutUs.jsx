import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";
const AboutUs = () => {
  return (
    <Layout>
      <div>
        <h1>Sobre Nosotros</h1>
        <section>
          <h2>De que trata el proyecto</h2>
        </section>
        <section>
          <h2>A quien esta dirigido</h2>
        </section>
        <section>
          <h2>Que tecnologias se usaron</h2>
        </section>
      </div>
    </Layout>
  )
}
export { AboutUs }