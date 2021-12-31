import * as React from "react"
import {graphql, PageProps} from "gatsby";
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

const ListPage = ({ data }: PageProps<GatsbyTypes.ListPageQuery>) => {
    return (
        <main css={container}>
            <ul css={grid}>
                {data.allMicrocmsBlogs.edges.map(({ node }) => (
                    <li key={node.blogsId}>
                        <Card
                            title={node?.title ?? ""}
                            src={node?.thumbnail?.url ?? ""}
                            to={`/${node.blogsId}` ?? "/"}
                        />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export const query = graphql`
  query ListPage {
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

export default ListPage
