exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allButterPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  data.allButterPost.edges.forEach((edge) => {
    actions.createPage({
      path: `/blog/${edge.node.slug}`,
      component: require.resolve(`./src/components/post.js`),
      context: { slug: edge.node.slug },
    });
  });
};
