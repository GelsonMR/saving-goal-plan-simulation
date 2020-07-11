import styled from 'styled-components';
import { media } from '../../constants';

const Container = styled.header`
  position: sticky;
  background-color: white;
  height: 56px;
  top: 0;
  left: 0;
  right: 0;

  ${media.tablet} {
    & {
      height: 79px;
    }
  }
`;

export default Container;
