import * as React from "react"
import { Link } from "gatsby"

const Nav = ({ pageName }) => {

    const currentPage = pageName

    return (
        <nav>
            <Link to="/series" className={currentPage === 'series' && 'current'}>Série</Link>
            ou
            <Link to="/filmes" className={currentPage === 'filmes' && 'current'}>Filme</Link>
        </nav>
    )
}

export default Nav