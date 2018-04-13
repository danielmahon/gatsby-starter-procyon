![gatsby-starter-procyon](https://github.com/danielmahon/gatsby-starter-procyon/raw/master/src/images/logo.png)

# gatsby-starter-procyon

### _Work in Progress!! Netlify CMS Edition_

An opinionated Gatsby starter designed for trash-eating pandas.

~~[View Demo - https://gatsby-starter-procyon.netlify.com/](https://gatsby-starter-procyon.netlify.com/)  
Click "Login" in the footer to enable client-side editing.  
`Email: demo@demo.com` `Password: demo`  
_You'll get an error when trying to save changes to remote, but you get the idea..._~~

> View the [GraphCMS](https://graphcms.com/) version on the `master` branch:  
> [https://github.com/danielmahon/gatsby-starter-procyon](https://github.com/danielmahon/gatsby-starter-procyon)

### Features

* [Gatsby](https://www.gatsbyjs.org/) + [ReactJS](https://reactjs.org/) (server side rendering)
* [Netlify CMS](https://www.netlifycms.org/) Headless Git-based CMS
* ~~[GraphCMS](https://graphcms.com/) Headless CMS via [gatsby-source-graphcms](https://github.com/GraphCMS/gatsby-source-graphcms)~~
* ~~[DraftJS](https://draftjs.org/) (in-place) [Medium](https://medium.com)-like Editing~~
* ~~[Apollo GraphQL](https://www.apollographql.com/) (client-side)~~
* ~~Local caching between builds~~
* [Material-UI](https://material-ui-next.com/) (layout, typography, components, etc)
* Styled-Components™-like API via Material-UI
* [Netlify](https://www.netlify.com/) Deployment Friendly
* [Netlify Identity](https://www.netlify.com/docs/identity/) Authentication (enables editing)
* [Versionist](https://github.com/danielmahon/versionist) automated deployment and CHANGELOG (forked until [#115](https://github.com/resin-io/versionist/pull/115))
* Automatic rebuilds ~~with GraphCMS and Netlify web hooks~~
* PWA (Progressive Web App)
* [Google Fonts](https://fonts.google.com/)
* Trash Panda Approved\*

### Coming Soon™

* [ ] Enhanced `styled` API supporting `React.forwardRef` and `props`
* [ ] Dynamic page and section creation
* [ ] Example on how to use Markdown AST to render components
* [ ] Transactional emails
* [ ] Contact form and message management
* [ ] Links to sites that used `gatsby-starter-procyon`

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

And run from your CLI:

```sh
gatsby new gatsby-starter-procyon https://github.com/danielmahon/gatsby-starter-procyon#netlifycms
cd gatsby-starter-procyon
```

#### ~~Setup GraphCMS~~

1.  ~~Create an account at [GraphCMS](https://graphcms.com).~~
2.  ~~Create a new project using the blog template.~~
3.  ~~Add at least one "Blog Post" to the CMS, be sure to fill out the `title`, `coverImage`, `content` and `slug`. These are required for the initial Gatsby build.~~
4.  ~~Create `.env.development` and `.env.production` in the root folder and add the following environmental variables with your token and endpoint:~~

```
GATSBY_GRAPHQLCMS_ENDPOINT=
GATSBY_GRAPHQLCMS_TOKEN=
```

Then you can run it by:

```sh
npm start
```

Navigate to [https://localhost:5000](https://localhost:5000) in your browser.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danielmahon/gatsby-starter-procyon#netlifycms)

#### Automatic versioning, deployment and CHANGELOG

This starter supports automatic versioning and CHANGELOG generation based on your git commits via [versionist](https://github.com/resin-io/versionist). Link your GitHub repo to Netlify to include automatic deployments.

First, create a GitHub repo and link it to Netlify:  
[https://www.netlify.com/docs/continuous-deployment/](https://help.github.com/articles/create-a-repo/).

```sh
# Initialize your repo
git init
# Add all files not in .gitignore
git add -A
# Create your first commit
git commit -m "Initial commit"
# Sets your remote origin to your GitHub repo
git remote add origin https://github.com/[username]/[repo-name].git
# Set your local master to track origin/master
git branch -u origin/master
# Push your first release
npm run release:patch
# 0.0.1 -> 0.0.2
# You can also increment by minor or major versions
# npm run release:minor
# npm run release:major
```

Make more changes...

```sh
git commit -m "Made something do something"
npm run release:patch
# 0.0.2 -> 0.0.3
```

#### ~~Setup Netlify Identity~~

~~There is a "Login" link in the site footer that launches the Netlify Identity Widget. The first time it opens it should ask you for your Netlify site's domain. Paste that in then you will be able to sign-up or login. I recommend starting with the simple email sign-up for local development.~~

#### ~~DraftJS Client-Side CMS Editing~~

~~Go to a blog post page and make sure you are logged in. Click inside the main post's content and start editing! You should see a "reset" and "save" button to the bottom-right of the content. Clicking save will use Apollo to update your GraphCMS content and if you setup web-hooks between GraphCMS and Netlify it will also trigger a rebuild of your static site! In the meantime Apollo will locally cache your changes so you will continue to see your changes until you refresh the site (which clears the cache). When the rebuild is done you can refresh the page and see the updated content.~~

## Questions

**Q: Why... this?**  
A: Well, I wanted to rebuild some small client marketing sites using the same tech I am currently using for web(native) apps, like ReactJS. Gatsby seemed cool, Netlify makes it easy, and I wanted in-place editing like Medium™. So I created a proof-of-concept and I was surprised it worked.

**Q: You're an idiot and this is :poop:**  
A: Thanks, and I welcome all creative criticism.

**Q: What's Procyon? Why Trash Pandas?**  
A: Look it up and because.

## Todo

Lots of stuff. Check issues in the future.
