import * as React from 'react';
import styled from 'styled-components';
import { Card, InputField } from '../../components';
import { media, colors } from '../../constants';
import HouseIcon from '../../icons/house.svg';
import GoalSummary from './components/GoalSummary';

const Display = styled.p`
  color: ${colors.darkBlue};
  text-align: center;
  font-weight: normal;
  letter-spacing: -0.225px;
  font-size: 18px;
  line-height: 26px;
  margin-top: 23px;
  margin-bottom: 24px;

  ${media.tablet} {
    & {
      font-size: 24px;
      line-height: 32px;
      margin-top: 54px;
      margin-bottom: 40px;
    }
  }
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    flex-direction: row;
  }
`;

const TotalAmountInput = styled(InputField)`
  flex: 0 1 50%;
  margin-bottom: 16px;
`;

TotalAmountInput.displayName = 'TotalAmountInput';

const GoalMonthInput = styled(InputField)`
  flex: 0 1 50%;
  margin-bottom: 16px;

  ${media.tablet} {
    margin-left: 17px;
  }
`;

const ConfirmButtonContainer = styled.div`
  margin: 0 -8px;
`;

const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  background-color: ${colors.darkBlue};
  width: 100%;
  max-width: 400px;
  margin: 36px auto 16px;
  left: -8px;
  right: -8px;
  color: white;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  border-radius: 28px;
  transition: 100ms ease-in-out;

  &:hover,
  &:active {
    background-color: ${colors.blue};
  }

  ${media.tablet} {
    & {
      margin: 31px auto 0;
    }
  }
`;

const SavingGoalScreen: React.FunctionComponent = () => {
  const [totalAmount, setTotalAmount] = React.useState('0');
  const [monthGoal, setMonthGoal] = React.useState(new Date().toJSON());
  const handleAmountInput = ({ target: { value } }) => setTotalAmount(value);

  return (
    <>
      <Display>
        {"Let's plan your "}
        <strong>saving goal.</strong>
      </Display>
      <Card title="Buy a house" subtitle="Saving goal" icon={HouseIcon}>
        <Fields>
          <TotalAmountInput
            label="Total amount"
            symbol="$"
            type="text"
            mask="currency"
            max="9999999999"
            value={totalAmount}
            onInput={handleAmountInput}
            autoFocus
          />
          <GoalMonthInput
            label="Reach goal by"
            type="monthPicker"
            min={new Date().toJSON()}
            value={monthGoal}
            onChange={setMonthGoal}
          />
        </Fields>
        <GoalSummary amount={parseInt(totalAmount) || 0} date={monthGoal} />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm</ConfirmButton>
        </ConfirmButtonContainer>
      </Card>
    </>
  );
};

export default SavingGoalScreen;
