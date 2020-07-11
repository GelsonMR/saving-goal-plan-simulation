import styled from 'styled-components';
import { colors, media } from '../../constants';

const Title = styled.div`
  color: ${colors.almostBlack};
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;

  ${media.tablet} {
    & {
      font-weight: 600;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: -0.266667px;
    }
  }
`;

export default Title;
