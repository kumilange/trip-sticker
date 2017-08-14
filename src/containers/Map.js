import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../redux'
import Map from '../components/Map/Map';

const mapStateToProps = state => {
  return {
    stickers: state.stickers,
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...ActionCreators
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);