import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// A function you can extract and put into its own module.
// Yes, 15 lines of code, it's all you need.
function styled(Component, customProps) {
  return (style, options) => {
    function StyledComponent(props) {
      const { classes, className, ...other } = props;
      return (
        <Component
          className={classNames(classes.root, className)}
          {...other}
          {...customProps}
        />
      );
    }
    StyledComponent.propTypes = {
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
    };
    const styles =
      typeof style === 'function'
        ? theme => ({ root: style(theme) })
        : { root: style };
    return withStyles(styles, options)(StyledComponent);
  };
}

export default styled;
