module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Incremental Builds Experiment",
  },
  plugins: [
    {
      resolve: `gatsby-source-buttercms`,
      options: {
        authToken: process.env.BUTTER_CMS_TOKEN,
      },
    },
  ],
  flags: {
    DEV_SSR: false,
  },
};
