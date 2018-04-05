![gatsby-starter-procyon](https://github.com/danielmahon/gatsby-starter-procyon/raw/master/static/logo.png)

# gatsby-starter-procyon

An opinionated Gatsby starter designed for trash-eating pandas.

### Coming Soon™ (work in progress)

Use this :poop: at your own risk...

### Features

* Gatsby + ReactJS (server side rendering)
* GraphCMS Database
* DraftJS (in-place) Medium™-like Editing
* Apollo GraphQL (client-side)
* Local caching between builds
* Material-UI (layout, typography, components, etc)
* Styled-Components™-like API via Material-UI
* Netlify Deployment Friendly
* Netlify Identity Authentication (enables editing)
* Automated deploy, versioning and CHANGELOG
* Automatic rebuilds with GraphCMS and Netlify web hooks
* PWA (Progressive Web App)
* Google Fonts
* Trash Panda Approved\*

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

And run from your CLI:

```sh
gatsby new gatsby-starter-procyon https://github.com/danielmahon/gatsby-starter-procyon
```

Create an account at [GraphCMS](graphcms.com) if you don't have one already, then create `.env.development` and `.env.production` in the root folder and add these environmental variables with your token and endpoint:

```
GATSBY_GRAPHQLCMS_ENDPOINT=
GATSBY_GRAPHQLCMS_TOKEN=
```

Then you can run it by:

```sh
cd gatsby-starter-procyon
npm start
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danielmahon/gatsby-starter-procyon)
