import * as React from 'react';
import Container from './Container';
import Logo from './Logo';

interface Props {
  logo: string;
  logoAlt: string;
}

const Header: React.FunctionComponent<Props> = props => {
  return (
    <Container>
      <Logo src={props.logo} alt={props.logoAlt} />
    </Container>
  );
};

export default Header;
