import * as React from 'react';
import styled from 'styled-components';
import { colors, media, months as monthsList } from '../../../constants';

const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  margin: 0 auto;
  border: 1px solid ${colors.gray};
  overflow: hidden;
`;

const MonthlyInfo = styled.div`
  height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;

  ${media.tablet} {
    height: 102px;
    padding: 0 32px;
  }
`;

const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-right: auto;

  ${media.tablet} {
    font-size: 18px;
    line-height: 24px;
  }
`;

const Value = styled.span`
  color: ${colors.blue};
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  letter-spacing: -0.216667px;

  ${media.tablet} {
    font-size: 40px;
    line-height: 32px;
  }
`;

const Summary = styled.div`
  height: 70px;
  padding: 0 24px;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  padding: 16px 24px 22px;

  ${media.tablet} {
    height: 102px;
    padding: 16px 32px;
  }
`;

interface Props {
  months: number;
  amount: number;
  date: string;
}

const Card: React.FunctionComponent<Props> = ({ months, amount, date }) => {
  const perMonth = Math.ceil(amount / months);
  const dateGoal = date && new Date(date);
  const selectedMonth = dateGoal && dateGoal.getMonth();
  const month = monthsList[selectedMonth];
  const year = dateGoal && dateGoal.getFullYear();
  const everyThreeDigits = /(\d)(?=(\d{3})+(?!\d))/g;
  const formattedPerMonth = perMonth
    .toString()
    .replace(everyThreeDigits, '$1,');
  const formattedAmount = amount.toString().replace(everyThreeDigits, '$1,');

  return (
    <Container>
      <MonthlyInfo>
        <Label>Monthly amount</Label>
        <Value>${formattedPerMonth}</Value>
      </MonthlyInfo>
      <Summary>
        <span>
          You’re planning <strong>{`${months} monthly deposits `}</strong>
          to reach your <strong>{`$${formattedAmount} `}</strong>
          goal by <strong>{`${month} ${year}.`}</strong>
        </span>
      </Summary>
    </Container>
  );
};

export default Card;
