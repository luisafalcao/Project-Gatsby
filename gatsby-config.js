module.exports = {
  siteMetadata: {
    title: `O que assistir?`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/lancamentos`
      }
    },
    "gatsby-plugin-mdx",
  ],
}
