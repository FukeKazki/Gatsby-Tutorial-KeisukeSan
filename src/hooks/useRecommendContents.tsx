import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";

export const useRecommendContents = () => {
    const { recommends } = useStaticQuery<GatsbyTypes.useRecommendQuery>(graphql`
    query useRecommend {
      recommends: allMicrocmsBlogs(filter: {category: {id: {eq: "recommend"}}}) {
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

    return recommends.edges
}