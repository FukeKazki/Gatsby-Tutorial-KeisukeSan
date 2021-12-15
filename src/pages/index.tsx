import * as React from "react"
import {graphql, PageProps} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import { Card } from "../components/Card";
import {css} from "@emotion/react";

const container = css`
  max-width: 900px;
  margin: 0 auto;
`

const grid = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
`

const IndexPage = ({ data }: PageProps<GatsbyTypes.TopPageQuery>) => {
  return (
    <main css={container}>
      <p>hello gatsby</p>
      <StaticImage
          src={"../images/hacktyu.png"}
          alt={"hacktyu"}
          width={100}
          height={100}
      />
      <ul css={grid}>
          {data.allMicrocmsBlogs.edges.map(({ node }) => (
              <li key={node.blogsId}>
                  <Card
                      title={node?.title ?? ""}
                      src={node?.thumbnail?.url ?? ""}
                      to={node.blogsId ?? "/"}
                  />
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
          thumbnail {
            url
          }
        }
      }
    }
  }
`

export default IndexPage
