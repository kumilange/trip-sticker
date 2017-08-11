import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Map from '../components/Map';
import { clickSpot } from '../actions'

const mapStateToProps = (state) => {
  return {
    stickers: state.stickers
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    clickSpot,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);