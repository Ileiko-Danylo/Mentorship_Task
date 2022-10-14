import React from 'react';
import { NeedToLogin } from '../../src/components/NeedToLogin';
import renderer from 'react-test-renderer';

describe('NeedToLogin', () => {
  it('should test component', () => {
    const tree = renderer.create(<NeedToLogin />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
