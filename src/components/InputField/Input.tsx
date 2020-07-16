import styled from 'styled-components';

const Input = styled.input`
  flex: 1;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  padding-left: 16px;
  height: 100%;
  width: 100%;
`;

Input.displayName = 'Input';

export default Input;
