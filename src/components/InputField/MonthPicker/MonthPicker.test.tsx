import React from 'react';
import { shallow } from 'enzyme';
import MonthPicker from '.';
import Button from './Button';
import Wrapper from './Wrapper';

describe('MonthPicker', () => {
  it('renders month picker', () => {
    const component = shallow(<MonthPicker />);

    expect(component.exists()).toEqual(true);
  });

  it('changes', () => {
    const onChangeMock = jest.fn();
    const event = {
      keyCode: 39
    };
    const component = shallow(<MonthPicker onChange={onChangeMock} />);
    component.find(Wrapper).simulate('keyDown', event);
    expect(onChangeMock).toBeCalled();
  });

  it('changes to next month when right key is pressed', () => {
    const onChangeMock = jest.fn();
    const event = {
      keyCode: 39
    };
    const defaultValue = new Date(2020, 6, 1).toJSON();
    const expectedValue = new Date(2020, 7, 1).toJSON();
    const component = shallow(<MonthPicker value={defaultValue} onChange={onChangeMock} />);
    component.find(Wrapper).simulate('keyDown', event);
    expect(onChangeMock).toBeCalledWith(expectedValue);
  });

  it('changes to previous month when left key is pressed', () => {
    const onChangeMock = jest.fn();
    const event = {
      keyCode: 37
    };
    const defaultValue = new Date(2020, 6, 1).toJSON();
    const expectedValue = new Date(2020, 5, 1).toJSON();
    const component = shallow(<MonthPicker value={defaultValue} onChange={onChangeMock} />);
    component.find(Wrapper).simulate('keyDown', event);
    expect(onChangeMock).toBeCalledWith(expectedValue);
  });

  it('keeps on the same month if it is the minimum month', () => {
    const onChangeMock = jest.fn();
    const event = {
      keyCode: 37
    };
    const defaultValue = new Date(2020, 6, 1).toJSON();
    const min = new Date(2020, 6, 1).toJSON();
    const component = shallow(<MonthPicker min={min} value={defaultValue} onChange={onChangeMock} />);
    component.find(Wrapper).simulate('keyDown', event);
    expect(onChangeMock).toBeCalledTimes(0);
  });

  it('changes to next month when previous button is clicked', () => {
    const onChangeMock = jest.fn();
    const defaultValue = new Date(2020, 6, 1).toJSON();
    const expectedValue = new Date(2020, 5, 1).toJSON();
    const component = shallow(<MonthPicker value={defaultValue} onChange={onChangeMock} />);
    component.find(Button).first().simulate('click');
    expect(onChangeMock).toBeCalledWith(expectedValue);
  });

  it('changes to next month when next button is clicked', () => {
    const onChangeMock = jest.fn();
    const defaultValue = new Date(2020, 6, 1).toJSON();
    const expectedValue = new Date(2020, 7, 1).toJSON();
    const component = shallow(<MonthPicker value={defaultValue} onChange={onChangeMock} />);
    component.find(Button).at(1).simulate('click');
    expect(onChangeMock).toBeCalledWith(expectedValue);
  });
});
