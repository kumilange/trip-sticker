import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Map from '../components/Map';
import { fetchStickers, openModal, openInfoWindow, closeInfoWindow } from '../actions'

const mapStateToProps = (state) => {
  return {
    stickers: state.stickers,
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchStickers,
    openModal,
    openInfoWindow,
    closeInfoWindow
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);