import * as React from "react"
import {graphql, PageProps, Link} from "gatsby";

// markup
const IndexPage = ({ data }: PageProps<GatsbyTypes.TopPageQuery>) => {
  return (
    <main>
      <p>hello gatsby</p>
      <ul>
          {data.allMicrocmsBlogs.edges.map(({ node }) => (
              <li key={node.blogsId}>
                  <Link to={node.blogsId ?? "/"}>
                      {node?.title && <p>{node.title}</p>}
                  </Link>
              </li>
          ))}
      </ul>
    </main>
  )
}

export const query = graphql`
  query TopPage {
    allMicrocmsBlogs {
      edges {
        node {
          title
          body
          blogsId
        }
      }
    }
  }
`

export default IndexPage
