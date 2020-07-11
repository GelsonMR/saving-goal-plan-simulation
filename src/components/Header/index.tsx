import * as React from 'react';
import styled from 'styled-components';
import Logo from '../../icons/logo.svg';
import { media } from '../../constants';

const Container = styled.header`
  position: sticky;
  background-color: white;
  height: 56px;
  top: 0;
  left: 0;
  right: 0;

  ${media.tablet} {
    & {
      height: 79px;
    }
  }
`;

const Image = styled.img`
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

const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <Image src={Logo} />
    </Container>
  );
};

export default Header;
