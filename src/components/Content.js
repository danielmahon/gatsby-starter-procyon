import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import styled from '../utils/styled';

class Content extends Component {
  render() {
    const { content } = this.props;
    const passThroughProps = { ...this.props };

    delete passThroughProps.content;

    if (React.isValidElement(content)) {
      return <Typography {...passThroughProps}>{content}</Typography>;
    }
    return (
      <Typography
        {...passThroughProps}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
}
const StyledContent = styled(Content)(theme => ({
  '& img': {
    maxWidth: '100%',
  },
}));

export default StyledContent;
