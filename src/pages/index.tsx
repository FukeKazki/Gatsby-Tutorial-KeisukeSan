import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Card } from "../components/Card";
import { css } from "@emotion/react";
import { useMellowContents } from "../hooks/useMellowContents";
import { useRecommendContents } from "../hooks/useRecommendContents";

const container = css`
  max-width: 900px;
  margin: 0 auto;
`;

const grid = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
`;

const IndexPage = () => {
  const mellows = useMellowContents();
  const recommends = useRecommendContents();

  return (
    <main css={container}>
      <p>hello gatsby</p>
      <StaticImage
        src={"../images/hacktyu.png"}
        alt={"hacktyu"}
        width={100}
        height={100}
      />
      <h2>しっとり</h2>
      <ul css={grid}>
        {mellows.map(({ node }) => (
          <li key={node.blogsId}>
            <Card
              title={node?.title ?? ""}
              src={node?.thumbnail?.url ?? ""}
              to={node.blogsId ?? "/"}
            />
          </li>
        ))}
      </ul>

      <h2>おすすめ</h2>
      <ul css={grid}>
        {recommends.map(({ node }) => (
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
  );
};

export default IndexPage;
