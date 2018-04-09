import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AboutPage from '../../templates/about-page';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPage
    preview
    data={{
      markdownRemark: {
        html: widgetFor('body'),
        frontmatter: { title: entry.getIn(['data', 'title']) },
      },
    }}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
