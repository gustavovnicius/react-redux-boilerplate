import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './js/components/hello.jsx';

main();

function main() {
  ReactDOM.render(<Hello />, document.getElementById('app'));
}
