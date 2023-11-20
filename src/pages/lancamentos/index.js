import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

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
            <p>Estes são os últimos lançamentos:</p>
            <ul>
                {
                    data.allMdx.nodes.map(node => (
                        <article>
                            <h2>
                                <Link to={`/lancamentos/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                                </Link>
                            </h2>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const Head = () => <title>Lançamentos</title>

export default LancamentosPage