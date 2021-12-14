import * as React from "react"
import {graphql} from "gatsby";

// markup
const IndexPage = ({ data }: any) => {
  return (
    <main>
      <p>hello gatsby</p>
      {JSON.stringify(data)}
    </main>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
  }
`

export default IndexPage
