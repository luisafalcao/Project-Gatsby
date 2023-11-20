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
            </header>
            {children}
            <footer>
                <nav>
                    <Link to="/lancamentos">Lançamentos</Link>
                    <Link to="/sugestoes">Sugestões</Link>
                </nav>
            </footer>
        </main>
    )
}