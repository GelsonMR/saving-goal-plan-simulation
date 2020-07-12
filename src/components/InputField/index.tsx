import * as React from 'react';
import Label from './Label';
import InputWrapper from './InputWrapper';
import Input from './Input';
import Symbol from './Symbol';

interface Props {
  className?: string;
  autoFocus?: boolean;
  label?: string;
  symbol?: React.ReactChild;
  type?: string;
}

const InputField: React.FunctionComponent<Props> = props => {
  return (
    <div className={props.className}>
      <Label>{props.label}</Label>
      <InputWrapper>
        {props.symbol && <Symbol>{props.symbol}</Symbol>}
        <Input autoFocus={props.autoFocus} type={props.type} />
      </InputWrapper>
    </div>
  );
};

export default InputField;
