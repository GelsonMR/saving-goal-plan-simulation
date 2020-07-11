import styled from 'styled-components';
import { media } from '../../constants';

const Logo = styled.img`
  margin-top: 20px;
  margin-left: 16px;
  height: 22px;

  ${media.tablet} {
    & {
      margin-top: 29px;
      margin-left: 37px;
      height: 30px;
    }
  }
`;

export default Logo;
