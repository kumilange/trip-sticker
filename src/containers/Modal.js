import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from '../components/Modal';
import { saveStickerInfo, closeModal } from '../actions'

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.isModalOpen,
    position: state.position
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    saveStickerInfo,
    closeModal
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);