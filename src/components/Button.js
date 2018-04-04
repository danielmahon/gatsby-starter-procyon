import React, { Component } from 'react';
import { Button } from 'material-ui';
import styled from '../utils/styled';

const StrokedDefault = styled(Button)(theme => ({
  border: `2px solid ${theme.palette.grey[300]}`,
}));
const StrokedPrimary = styled(Button)(theme => ({
  border: `2px solid ${theme.palette.primary[50]}`,
}));

class StrokedButton extends Component {
  render() {
    const { color = 'default', variant } = this.props;
    let MButton = Button;
    if (variant === 'stroked') {
      MButton = StrokedDefault;
      if (color === 'primary') {
        MButton = StrokedPrimary;
      }
    }
    return (
      <MButton {...this.props} variant={variant !== 'stroked' ? variant : null}>
        {this.props.children}
      </MButton>
    );
  }
}
export default StrokedButton;
