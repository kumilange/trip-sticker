import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions'
import Modal from '../components/Modal/Modal';

const mapStateToProps = state => {
  return {
    isModalOpen: state.isModalOpen,
    isAddModal: state.isAddModal,
    sticker: state.sticker,
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...ActionCreators
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);