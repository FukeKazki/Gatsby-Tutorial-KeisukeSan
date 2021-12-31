import * as React from "react";
import { graphql, PageProps } from "gatsby";

export default function BlogDetail({
  data
}: PageProps<GatsbyTypes.BlogDetailQuery>) {
  return (
    <div>
      <img
        src={data.microcmsBlogs?.thumbnail?.url ?? "../images/hacktyu.png"}
        alt={data.microcmsBlogs?.title ?? "default alt"}
        loading="lazy"
      />
      <h1>{data.microcmsBlogs?.title ?? "デフォルトタイトル"}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.microcmsBlogs?.body ?? "本文" }}
      />
    </div>
  );
}

export const query = graphql`
  query BlogDetail($blogsId: String) {
    microcmsBlogs(blogsId: { eq: $blogsId }) {
      body
      title
      blogsId
      thumbnail {
        height
        url
        width
      }
    }
  }
`;
