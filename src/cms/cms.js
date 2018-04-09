// Your module must at least include these three imports
import React from 'react';
import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';
import withRoot from '../utils/withRoot';

import HomePagePreview from './preview-templates/HomePagePreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';

function withPreviewStyles(Template) {
  class StyledTemplate extends React.Component {
    componentDidMount() {
      const manager = this.props.pageContext.sheetsManager;
      let sheets = '';
      manager.forEach(reg => {
        reg.forEach(val => {
          sheets += val.sheet.toString();
        });
      });
      CMS.registerPreviewStyle(sheets.toString(), { raw: true });
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <Template {...this.props} />;
    }
  }
  return withRoot(StyledTemplate);
}

// CMS.registerPreviewStyle('.frame-content > div { padding: 20px; }', {
//   raw: true,
// });

CMS.registerPreviewTemplate('home', withPreviewStyles(HomePagePreview));
CMS.registerPreviewTemplate('about', withPreviewStyles(AboutPagePreview));
CMS.registerPreviewTemplate('blog', withPreviewStyles(BlogPostPreview));
