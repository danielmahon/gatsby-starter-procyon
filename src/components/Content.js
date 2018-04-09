import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import styled from '../utils/styled';

const StyledTypography = styled(Typography)(theme => ({
  '& img': {
    maxWidth: '100%',
  },
}));

class Content extends Component {
  render() {
    const { content, ...props } = this.props;

    // Set prop defaults
    props.component = props.component || 'div';

    if (React.isValidElement(content)) {
      return <StyledTypography {...props}>{content}</StyledTypography>;
    }
    return (
      <StyledTypography
        {...props}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
}

export default Content;
