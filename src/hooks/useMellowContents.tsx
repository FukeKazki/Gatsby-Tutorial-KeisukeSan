import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";

export const useMellowContents = () => {
    const { mellows } = useStaticQuery<GatsbyTypes.useMellowQuery>(graphql`
    query useMellow {
      mellows: allMicrocmsBlogs(filter: {category: {id: {eq: "mellow"}}}) {
        edges {
          node {
            title
            id
            blogsId
            category {
              title
              id
            }
            thumbnail {
              url
            }
          }
        }
      }
    }
   `)

    return mellows.edges
}