import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <nav>
          <Link to="/series">Série</Link>
          ou
          <Link to="/filmes">Filme</Link>
      </nav>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>O Que Assistir?</title>
