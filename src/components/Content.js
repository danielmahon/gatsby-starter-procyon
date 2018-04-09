import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

class Content extends Component {
  render() {
    const { content } = this.props;
    if (React.isValidElement(content)) {
      return <Typography {...this.props}>{content}</Typography>;
    }
    return (
      <Typography
        {...this.props}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
}

export default Content;
