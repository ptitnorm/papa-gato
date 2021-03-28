import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "@fontsource/raleway/"

const IndexPage = () => (
  <Layout >
    <SEO title="Super Papa Gâto" />
    <div style={{fontFamily: `Raleway`}}>
      <h1>Bienvenue</h1>
      <p>Super Papa Gato confectionne des gâteaux sur mesures.</p>
      <p>Une touche d'émerveillement aux fêtes d'enfant!</p>
    </div>

    <StaticImage
      src="../images/airbrush.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="un papa gâteau"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
