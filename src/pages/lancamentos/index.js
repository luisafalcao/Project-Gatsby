import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import "./lancamentos.css"

const LancamentosPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        title
                        slug
                    }
                    id
                    excerpt
                }
            }
        }
    `)
    return (
        <Layout>
            <h2>Lançamentos de novembro:</h2>
            <ul>
                {
                    data.allMdx.nodes.map(node => (
                        <article>
                            <p>
                                <Link to={`/lancamentos/${node.frontmatter.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </p>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const Head = () => <title>Lançamentos</title>

export default LancamentosPage