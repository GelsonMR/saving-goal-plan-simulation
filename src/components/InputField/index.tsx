import * as React from 'react';
import Label from './Label';
import InputWrapper from './InputWrapper';
import MonthPicker from './MonthPicker';
import Input from './Input';
import Symbol from './Symbol';

interface Props {
  className?: string;
  autoFocus?: boolean;
  label?: string;
  symbol?: React.ReactChild;
  type?: string;
  value?: string;
  min?: string;
}

const InputField: React.FunctionComponent<Props> = ({
  className,
  label,
  symbol,
  type,
  value,
  min,
  autoFocus
}) => {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <InputWrapper>
        {symbol && <Symbol>{symbol}</Symbol>}
        {type === 'monthPicker' ? (
          <MonthPicker min={min} value={value} />
        ) : (
          <Input autoFocus={autoFocus} type={type} />
        )}
      </InputWrapper>
    </div>
  );
};

export default InputField;
