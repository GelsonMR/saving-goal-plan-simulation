import * as React from 'react';
import Container from './Container';
import Logo from './Logo';
import OriginLogo from '../../icons/logo.svg';

const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <Logo src={OriginLogo} alt="Origin" />
    </Container>
  );
};

export default Header;
