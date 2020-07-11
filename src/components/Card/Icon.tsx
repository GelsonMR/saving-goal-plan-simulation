import styled from 'styled-components';
import { media } from '../../constants';

const Icon = styled.img`
  margin-bottom: 4px;
  height: 32px;

  ${media.tablet} {
    & {
      height: 40px;
    }
  }
`;

export default Icon;
