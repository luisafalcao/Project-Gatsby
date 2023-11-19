import React from "react"
import "./layout.css"
import { Link } from "gatsby"

export default function Layout({ children }) {
    return (
        <>
        <main>
            <h1>O que você quer assistir agora?</h1>
            <nav>
                <Link to="/series" data-page="series">Séries</Link>
                <Link to="/filmes" data-page="filmes">Filmes</Link>
            </nav>
            {children}
        </main>
        <footer>2023</footer>
        </>
    )
}