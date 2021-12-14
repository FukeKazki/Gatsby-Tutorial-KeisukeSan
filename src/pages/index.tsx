import * as React from "react"
import {graphql, PageProps, Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

// markup
const IndexPage = ({ data }: PageProps<GatsbyTypes.TopPageQuery>) => {
  return (
    <main>
      <p>hello gatsby</p>
      <StaticImage
          src={"../images/hacktyu.png"}
          alt={"hacktyu"}
          width={100}
          height={100}
      />
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
