import React from 'react';
import ReactDOM from 'react-dom';
import Board from '../src/components/Board';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board />, div);

  const component = renderer.create(<Board />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
