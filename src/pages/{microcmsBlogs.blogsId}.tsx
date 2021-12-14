import * as React from "react"
import {graphql, PageProps} from "gatsby";

export default function BlogDetail({data}: PageProps<GatsbyTypes.BlogDetailQuery>) {
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export const query = graphql`
  query BlogDetail ($blogsId: String) {
    microcmsBlogs(blogsId: {eq: $blogsId}) {
      body
      title
      blogsId
    }
  }
`