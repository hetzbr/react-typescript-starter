import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './components/hello-world/hello-world';
import './index.scss';

render(<HelloWorld />, document.getElementById('app'));
