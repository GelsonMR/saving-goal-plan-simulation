import * as React from 'react';

interface Props {
  className?: string;
}

const Icon: React.FunctionComponent<Props> = ({ className }) => (
  <img src="../../icons/arrow.svg" alt="<" className={className} />
);

export default Icon;
