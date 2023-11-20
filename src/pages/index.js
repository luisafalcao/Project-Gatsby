import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import image from "../images/image_index.svg";
import "../components/layout.css"

const IndexPage = () => {
  return (
    <Layout>
      <img className="index_img" src={image} />
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
