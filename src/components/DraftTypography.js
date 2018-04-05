import React, { Component } from 'react';
import { Grid, Typography } from 'material-ui';

class DraftTypography extends Component {
  render() {
    return (
      <Typography component="div" {...this.props}>
        {this.props.children}
      </Typography>
    );
  }
}

export default DraftTypography;
