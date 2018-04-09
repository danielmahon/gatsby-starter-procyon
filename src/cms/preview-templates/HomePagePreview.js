import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomePage from '../../templates/home-page';
import CMS from 'netlify-cms';
import { injectStyles } from '../cms';

const HomePagePreview = ({ entry, widgetFor }) => (
  <HomePage
    preview
    data={{
      markdownRemark: {
        html: widgetFor('body'),
        frontmatter: { title: entry.getIn(['data', 'title']) },
      },
    }}
  />
);

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default HomePagePreview;
