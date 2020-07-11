import styled from 'styled-components';
import { colors, media } from '../../constants';

const Subtitle = styled.div`
  color: ${colors.prettyGray};
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 36px;

  ${media.tablet} {
    & {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 40px;
    }
  }
`;

export default Subtitle;
