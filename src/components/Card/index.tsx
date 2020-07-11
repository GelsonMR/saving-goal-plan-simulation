import * as React from 'react';
import Container from './Container';
import Icon from './Icon';
import Title from './Title';
import Subtitle from './Subtitle';

interface Props {
  title: string;
  subtitle: string;
  icon?: string;
  children?: React.ReactNode;
}

const Card: React.FunctionComponent<Props> = props => {
  return (
    <Container>
      {props.icon && <Icon src={props.icon} />}
      {props.title && <Title>{props.title}</Title>}
      {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
      {props.children}
    </Container>
  );
};

export default Card;
