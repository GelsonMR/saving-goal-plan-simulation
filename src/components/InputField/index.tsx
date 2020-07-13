import * as React from 'react';
import Label from './Label';
import InputWrapper from './InputWrapper';
import MonthPicker from './MonthPicker';
import Input from './Input';
import Symbol from './Symbol';

interface Props {
  className?: string;
  label?: string;
  symbol?: React.ReactChild;
  type?: string;
  value?: string;
  mask?: string;
  min?: string;
  max?: string;
  onChange?: Function;
  onInput?: Function;
  autoFocus?: boolean;
}

const InputField: React.FunctionComponent<Props> = ({
  className,
  label,
  symbol,
  type,
  value,
  mask,
  min,
  max,
  onChange,
  onInput,
  autoFocus
}: Props) => {
  const [inputValue, setValue] = React.useState(value);
  return (
    <div className={className}>
      <Label>{label}</Label>
      <InputWrapper>
        {symbol && <Symbol>{symbol}</Symbol>}
        {type === 'monthPicker' ? (
          <MonthPicker min={min} value={value} />
        ) : (
          <Input
            autoFocus={autoFocus}
            type={type}
            value={inputValue}
            max={max}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange && onChange(event)
            }
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (mask === 'currency') {
                const maxValue = parseInt(max);
                const notNumber = /[^0-9]/g;
                const everyThreeDigits = /(\d)(?=(\d{3})+(?!\d))/g;
                const currentValue = event.target.value;

                if (!currentValue) {
                  setValue('');
                } else {
                  const intValue = parseInt(
                    currentValue.toString().replace(notNumber, '')
                  );
                  if (
                    !(
                      maxValue &&
                      typeof intValue === 'number' &&
                      intValue > maxValue
                    )
                  ) {
                    const formattedValue = intValue
                      .toString()
                      .replace(everyThreeDigits, '$1,');
                    setValue(formattedValue);
                    event.target.value = intValue.toString();
                  } else {
                    event.target.value = inputValue.replace(notNumber, '');
                  }
                }
              }
              onInput && onInput(event);
            }}
          />
        )}
      </InputWrapper>
    </div>
  );
};

export default InputField;
