import * as React from "react"
import {graphql, PageProps} from "gatsby";

// markup
const IndexPage = ({ data }: PageProps<GatsbyTypes.TopPageQuery>) => {
  return (
    <main>
      <p>hello gatsby</p>
      <ul>
          {data.allMicrocmsBlogs.edges.map(({ node }) => (
              <li key={node.id}>
                  {node?.title && <p>{node.title}</p>}
                  {node?.body && <p dangerouslySetInnerHTML={{ __html: node.body }} />}
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
          id
        }
      }
    }
  }
`

export default IndexPage
