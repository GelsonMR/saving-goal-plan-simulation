import * as React from 'react';
import styled from 'styled-components';
import { media, colors } from '../../constants';

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

const SavingGoalScreen: React.FunctionComponent = () => {
  return (
    <>
      <Display>
        {"Let's plan your "}
        <strong>saving goal.</strong>
      </Display>
    </>
  );
};

export default SavingGoalScreen;
