import Card from './card';
import renderer from 'react-test-renderer'


test('renders a snapshot', () => {
  const tree = renderer.create(<Card/>).toJSON()
  expect(tree).toMatchSnapshot()
})