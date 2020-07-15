import * as React from 'react';
import styled from 'styled-components';
import ArrowIcon from './ArrowIcon';
import { colors, months } from '../../constants';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
`;

const Button = styled.button`
  flex: none;
  display: flex;
  height: 100%;
  width: 47px;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${colors.gray};
  background-color: ${colors.gray};
  transition: 100ms ease-in-out;

  &:disabled {
    opacity: 0.6;
  }

  &:not([disabled]):hover {
    border-color: ${colors.lightGray};
    background-color: ${colors.lightGray};
  }

  &:not([disabled]):active {
    border-color: ${colors.lighterGray};
    background-color: ${colors.lighterGray};
  }
`;

const ArrowIconRight = styled(ArrowIcon)`
  transform: rotate(180deg);
`;

const Value = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Year = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;

interface Props {
  min?: string;
  value?: string;
  onChange?: Function;
}

const MonthPicker: React.FunctionComponent<Props> = ({
  value = new Date().toJSON(),
  min,
  onChange
}) => {
  const selectedDate = new Date(value);
  const selectedMonth = selectedDate.getMonth();
  const selectedYear = selectedDate.getFullYear();
  const minDate = min && new Date(min);
  const disablePrev =
    minDate &&
    selectedMonth <= minDate.getMonth() &&
    selectedYear <= minDate.getFullYear();

  const [month, setMonth] = React.useState(value);
  const changeMonth = (quantity: number) => {
    const date = new Date(month);
    date.setMonth(date.getMonth() + quantity);
    const parsedDate = date.toJSON();
    setMonth(parsedDate);
    onChange && onChange(parsedDate);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 37 && !disablePrev) {
      changeMonth(-1);
    }
    if (event.keyCode === 39) {
      changeMonth(1);
    }
  };

  return (
    <Wrapper tabIndex={0} onKeyDown={onKeyDown}>
      <Button disabled={disablePrev} onClick={() => changeMonth(-1)}>
        <ArrowIcon />
      </Button>
      <Value>
        <span>{months[selectedMonth]}</span>
        <Year>{selectedYear}</Year>
      </Value>
      <Button onClick={() => changeMonth(1)}>
        <ArrowIconRight />
      </Button>
    </Wrapper>
  );
};

export default MonthPicker;
