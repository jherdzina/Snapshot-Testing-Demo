import renderer from 'react-test-renderer'
import React from 'react'
import App from  './App'

test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})