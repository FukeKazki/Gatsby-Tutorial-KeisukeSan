import * as React from "react"
import {graphql, PageProps} from "gatsby";

// markup
const IndexPage = ({ data }: PageProps<GatsbyTypes.TopPageQuery>) => {
  return (
    <main>
      <p>hello gatsby</p>
      {JSON.stringify(data)}
    </main>
  )
}

export const query = graphql`
  query TopPage {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
  }
`

export default IndexPage
