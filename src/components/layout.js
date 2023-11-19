import React from "react"
import "./layout.css"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Layout({ children }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                  title
                }
            }
        }
    `)
    return (
        <>
        <header><h1>{data.site.siteMetadata.title}</h1></header>
        <main>
            <nav>
                <Link to="/series">Séries</Link>
                <Link to="/filmes">Filmes</Link>
                <Link to="/lancamentos">Filmes</Link>
            </nav>
            {children}
        </main>
        </>
    )
}