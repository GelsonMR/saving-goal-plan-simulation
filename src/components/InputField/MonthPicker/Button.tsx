import styled from 'styled-components';
import { colors } from '../../../constants';

const Button = styled.button`
  flex: none;
  display: flex;
  height: 100%;
  width: 47px;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${colors.gray};
  background-color: ${colors.gray};
  transition: 100ms ease-in-out;

  &:disabled {
    opacity: 0.6;
  }

  &:not([disabled]):hover {
    border-color: ${colors.blueishGray};
    background-color: ${colors.blueishGray};
  }

  &:not([disabled]):active {
    border-color: ${colors.gray};
    background-color: ${colors.gray};
  }
`;

export default Button;
