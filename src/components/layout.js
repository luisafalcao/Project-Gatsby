import React from "react"
import "./layout.css"
import { Link } from "gatsby"

export default function Layout({ children }) {
    return (
        <main>
            <h1>O que você quer assistir agora?</h1>
            <nav>
                <Link to="/series">Séries</Link>
                <Link to="/filmes">Filmes</Link>
            </nav>
            {children}
            <footer></footer>
        </main>
    )
}