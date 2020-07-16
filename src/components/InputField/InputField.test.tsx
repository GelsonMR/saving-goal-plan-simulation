import React from 'react';
import { shallow } from 'enzyme';
import InputField from './index';
import Input from './Input';

describe('InputField', () => {
  it('renders', () => {
    const component = shallow(<InputField />);

    expect(component.exists()).toEqual(true);
  });

  it('changes', () => {
    const onChangeMock = jest.fn();
    const event = {
      target: { value: '100' }
    };
    const component = shallow(<InputField onChange={onChangeMock} />);
    component.find(Input).simulate('change', event);
    expect(onChangeMock).toBeCalledWith(event);
  });

  it('inputs', () => {
    const onInputMock = jest.fn();
    const event = {
      target: { value: '100' }
    };
    const component = shallow(<InputField onInput={onInputMock} />);
    component.find(Input).simulate('input', event);
    expect(onInputMock).toBeCalledWith(event);
  });

  it('changes with currency mask', () => {
    const onChangeMock = jest.fn();
    const event = {
      target: { value: '1000000' }
    };
    const component = shallow(<InputField mask="currency" onChange={onChangeMock} />);
    component.find(Input).simulate('input', event);
    expect(component.find(Input).prop('value')).toBe('1,000,000');
  });

  it('empties with currency mask', () => {
    const onChangeMock = jest.fn();
    const component = shallow(<InputField mask="currency" value="1000000" onChange={onChangeMock} />);
    const event = {
      target: { value: '' }
    };
    component.find(Input).simulate('input', event);
    expect(component.find(Input).prop('value')).toBe('');
  });

  it('allows only numbers equal or lower than the max', () => {
    const onChangeMock = jest.fn();
    const component = shallow(<InputField max="100" value="100" mask="currency" onChange={onChangeMock} />);
    const event = {
      target: { value: '1000' }
    };
    component.find(Input).simulate('input', event);
    expect(component.find(Input).prop('value')).toBe('100');
  });

  it('allows only numeric characters when having a mask', () => {
    const onChangeMock = jest.fn();
    const component = shallow(<InputField max="1000" mask="currency" onChange={onChangeMock} />);
    const event = {
      target: { value: 'a' }
    };
    component.find(Input).simulate('input', event);
    expect(component.find(Input).prop('value')).toBe('');
  });
});
