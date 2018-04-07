/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post.js`);

    graphql(`
      {
        allPost {
          edges {
            node {
              id
              title
              slug
              coverImage {
                handle
              }
              content
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors);
      }
      result.data.allPost.edges.map(({ node }) => {
        createPage({
          path: `/post/${node.slug}`,
          component: slash(postTemplate),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });
};
