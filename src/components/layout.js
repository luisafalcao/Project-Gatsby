import React from "react"
import "./layout.css"
import { Link } from "gatsby"

export default function Layout({ children }) {

    return (
        <>
        <header><h1>O Que Assistir?</h1></header>
        <main>
            <nav>
                <Link to="/series" data-page="series">Séries</Link>
                <Link to="/filmes" data-page="filmes">Filmes</Link>
            </nav>
            {children}
        </main>
        </>
    )
}