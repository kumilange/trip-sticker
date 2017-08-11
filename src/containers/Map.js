import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Map from '../components/Map';
import * as actionCreators from '../actions'

const mapStateToProps = (state) => {
  return {
    stickers: state.stickers
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...actionCreators
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);