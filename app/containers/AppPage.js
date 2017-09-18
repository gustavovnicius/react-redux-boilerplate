import { connect } from 'react-redux';

import App from 'components/App';
import { thunkExample } from 'actions/example';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  thunkExample: () => dispatch(thunkExample()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
