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
        <main>
            <header>
                <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
                <p className="subtitle">Sugestões de filmes e séries para pessoas indecisas.</p>
            </header>
            {children}
            <footer>
                <Link to="/">Início</Link>
                <Link to="/lancamentos">Lançamentos</Link>
                <Link to="/contato">Contato</Link>
            </footer>
        </main>
    )
}