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
cd gatsby-starter-procyon
```

#### Setup GraphCMS

1.  Create an account at [GraphCMS](graphcms.com).
2.  Create a new project using the blog template.
3.  Add at least one "Blog Post" to the CMS, be sure to fill out the `title`, `coverImage`, `content` and `slug`. These are required for the initial Gatsby build.
4.  Create `.env.development` and `.env.production` in the root folder and add the following environmental variables with your token and endpoint:

```
GATSBY_GRAPHQLCMS_ENDPOINT=
GATSBY_GRAPHQLCMS_TOKEN=
```

Then you can run it by:

```sh
npm start
```

Navigate to `https://localhost:5000` in your browser.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danielmahon/gatsby-starter-procyon)

#### Setup Netlify Identity

There is a "Login" link in the site footer that launches the Netlify Identity Widget. The first time it opens it should ask you for your Netlify site's domain. Paste that in then you will be able to sign-up or login. I recommend starting with the simple email sign-up for local development.

#### DraftJS Client-Side CMS Editing

Go to a blog post page and make sure you are logged in. Click inside the main post's content and start editing! You should see a "reset" and "save" button to the bottom-right of the content. Clicking save will use Apollo to update your GraphCMS content and if you setup webhooks between GraphCMS and Netlify it will also trigger a rebuild of your static site! In the meantime Apollo will locally cache your changes so you will continue to see your changes until your refresh the site (which clears the cache). When the rebuild is done you can refresh the page and see the updated content.

## Questions

**Q: Why... this?**  
A: Well, I wanted to rebuild some small client marketing sites using the same tech I am currently using for web(native) apps, like ReactJS. Gatsby seemed cool, Netlify makes it easy, and I wanted in-place editing like Medium™. So I created a proof-of-concept and I was surprised it worked.

**Q: You're an idiot and this is all wrong!**  
A: Thanks, and I welcome all creative criticism.

**Q: This :poop: doesn't work!**  
A: Duh. Did you see the "(work in progress)" warning at the top?

**Q: What's Procyon? Why Trash Pandas?**  
A: Look it up and because.

## Todo

Lots of stuff. Check issues in the future.
