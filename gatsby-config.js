module.exports = {
  siteMetadata: {
    siteUrl: "https://incremental-builds.netlify.app",
    title: "Incremental Builds Experiment",
  },
  plugins: [
    {
      resolve: `gatsby-source-buttercms`,
      options: {
        authToken: process.env.BUTTER_CMS_TOKEN,
        preview: 1,
      },
    },
  ],
  flags: {
    DEV_SSR: false,
  },
};
