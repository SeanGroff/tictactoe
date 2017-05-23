import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import ReactDOM from 'react-dom';
import Board from '../components/Board';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board />, div);

  const component = renderer.create(
    <Provider store={store}>
      <Board />;
    </Provider>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
