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
  border-right: 1px solid ${colors.lightGray};
  background-color: ${colors.lighterGray};
  color: ${colors.prettyGray};
`;

export default Symbol;
