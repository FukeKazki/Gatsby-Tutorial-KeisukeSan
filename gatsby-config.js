module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "keisukesan",
  },
  plugins: [
      "gatsby-plugin-emotion",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
          resolve: `gatsby-plugin-typegen`,
          options: {
              outputPath: `src/__generated__/gatsby-types.d.ts`
          }
      },
      {
          resolve: 'gatsby-source-microcms',
          options: {
              apiKey: '',
              serviceId: 'keisukesan',
              apis: [
                  {
                      endpoint: 'blogs',
                  },
              ],
          },
      },
  ],
};
