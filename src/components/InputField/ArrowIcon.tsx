import * as React from 'react';
import Icon from '../../icons/arrow.svg';

interface Props {
  className?: string;
}

const ArrowIcon: React.FunctionComponent<Props> = ({ className }) => (
  <img src={Icon} alt="<" className={className} />
);

export default ArrowIcon;
