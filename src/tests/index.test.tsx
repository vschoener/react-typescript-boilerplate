import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom'; /* tslint:disable-next-line */
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Foo from '../components/Foo';
import App from '../components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App message="Hello" />, div);
  unmountComponentAtNode(div);
});

Enzyme.configure({ adapter: new Adapter() });
it('shallow renders without crashing', () => {
  Enzyme.shallow(<Foo />);
});
