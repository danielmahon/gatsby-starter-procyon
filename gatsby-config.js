require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Procyon',
    shortName: 'Procyon',
    description:
      'An opinionated Gatsby starter designed for trash-eating pandas.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GRAPHQLCMS_ENDPOINT,
        token: process.env.GRAPHQLCMS_TOKEN,
        // Get all remote data
        query: `{
          allPosts {
            id
            slug
            title
            content
            dateAndTime
            coverImage {
              handle
            }
          },
          allAuthors {
            id
            name
            bibliography
            avatar {
              handle
            }
          }
        }`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        get name() {
          return module.exports.siteMetadata.title;
        },
        get short_name() {
          return module.exports.siteMetadata.shortName;
        },
        start_url: '/',
        background_color: '#fff',
        theme_color: '#61045f',
        display: 'minimal-ui',
        // icons: [
        //   {
        //     src: `/favicons/chrome-192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `/favicons/chrome-512.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        // ],
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-netlify',
  ],
};
