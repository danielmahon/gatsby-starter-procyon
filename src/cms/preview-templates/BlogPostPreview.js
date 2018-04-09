import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <BlogPost
      preview
      data={{
        markdownRemark: {
          html: widgetFor('body'),
          frontmatter: { title: entry.getIn(['data', 'title']) },
        },
      }}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
