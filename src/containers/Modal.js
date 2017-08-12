import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from '../components/Modal';
import { saveStickerInfo, closeModal, inputCountry, inputCity, inputNote, inputUsername } from '../actions'

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.isModalOpen,
    sticker: state.sticker,
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    saveStickerInfo,
    closeModal,
    inputCountry,
    inputCity,
    inputNote,
    inputUsername
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);