module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Incremental Builds Experiment",
  },
  plugins: [
    {
      resolve: `gatsby-source-buttercms`,
      options: {
        authToken: `3e1cf5f6d8d3e29438f8c644de9aaaa414561fed`,
        // Optional. Returns values for the supplied content field keys.
        /*contentFields: {
          keys: [`faq_items`, `faq_headline`],
          // Optional. Set to 1 to enable test mode for viewing draft content.
          test: 0,
        },
        // Optional. Array of page slugs.
        pages: [`homepage`],
        // Optional. Array of page types.
        pageTypes: [`customer_case_study`],*/
      },
    },
  ],
  flags: {
    DEV_SSR: false,
  },
};
