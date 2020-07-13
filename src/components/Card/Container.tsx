import styled from 'styled-components';
import { colors, media } from '../../constants';

const Container = styled.header`
  background-color: white;
  padding: 28px 24px;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(225, 232, 237, 0.8);
  margin: 0 auto;

  ${media.tablet} {
    & {
      padding: 39px 40px 49px;
      border-radius: 8px;
      box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
      border: 1px solid ${colors.gray};
      width: 560px;
      margin: 0 auto 32px;
    }
  }
`;

export default Container;
