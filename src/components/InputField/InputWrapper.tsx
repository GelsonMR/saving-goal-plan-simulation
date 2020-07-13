import styled from 'styled-components';
import { colors } from '../../constants';

const InputWrapper = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: white;
  height: 56px;
  border: 1px solid ${colors.gray};
  align-items: stretch;
  overflow: hidden;
`;

export default InputWrapper;
