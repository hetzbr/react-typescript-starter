import React from 'react';
import { render } from '@testing-library/react';
import HelloWorld from './hello-world';

describe('App', () => {
  it('should render hello, world!', () => {
    const { container } = render(
      <HelloWorld />,
    );

    expect(container).toHaveTextContent('Hello, World!');
  });
});
