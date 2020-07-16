import styled from 'styled-components';
import { colors } from '../../constants';

const Symbol = styled.div`
  display: flex;
  flex: none;
  font-weight: normal;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 22px;
  height: 100%;
  width: 55px;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${colors.gray};
  background-color: ${colors.blueishGray};
  color: ${colors.prettyGray};
`;

export default Symbol;
