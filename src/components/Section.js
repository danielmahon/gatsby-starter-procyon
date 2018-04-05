import { Grid } from 'material-ui';
import styled from '../utils/styled';

const Section = styled(Grid, {
  component: 'section',
  spacing: 16,
  justify: 'center',
  container: true,
})(theme => ({
  padding: '2em 0 4em 0',
}));

export default Section;
