import React from 'react';
import PropTypes from 'prop-types';

const App = ({ thunkExample }) => (
  <div>
    <button onClick={thunkExample}> Click me! </button>
  </div>
);

App.propTypes = {
  thunkExample: PropTypes.func,
}

export default App;
