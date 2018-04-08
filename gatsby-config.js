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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        get name() {
          return module.exports.siteMetadata.title;
        },
        get short_name() {
          return module.exports.siteMetadata.shortName;
        },
        start_url: '/',
        background_color: '#fafafa',
        theme_color: '#212121',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-next',
    'gatsby-plugin-netlify',
  ],
};
