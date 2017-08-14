import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Textfield } from 'react-mdl';

import './Modal.css';

const Modal = (props)=> {
  return (
    <div>
      <Dialog open={props.isModalOpen}>
        {props.isAddModal
          ? <DialogTitle>Make a sticker!</DialogTitle>
          : <DialogTitle>Edit a sticker!</DialogTitle>
        }
        <DialogContent>
          <Textfield
            onChange={e => {props.inputCountry(e.target.value)}}
            label="Country"
            floatingLabel
            style={{width: '240px'}}
            value={props.sticker.country}
          />
          <Textfield
            onChange={e => {props.inputCity(e.target.value)}}
            label="City"
            floatingLabel
            style={{width: '240px'}}
            value={props.sticker.city}
          />
          <Textfield
            onChange={e => {props.inputNote(e.target.value)}}
            label="Note"
            floatingLabel
            style={{width: '240px'}}
            value={props.sticker.note}
          />
          <Textfield
            onChange={e => {props.inputUsername(e.target.value)}}
            label="Your name"
            floatingLabel
            style={{width: '240px'}}
            value={props.sticker.username}
          />
        </DialogContent>
        <DialogActions>
          {props.isAddModal
            ? <Button type='button' onClick={()=> props.saveSticker(props.sticker)} raised accent ripple>Save</Button>
            : <Button type='button' onClick={()=> props.editSticker(props.sticker)} raised accent ripple>Update</Button>
          }
          <Button type='button' onClick={props.closeModal} raised ripple>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Modal.propTypes = {
  sticker: PropTypes.object.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  isAddModal: PropTypes.bool.isRequired,
  saveSticker: PropTypes.func.isRequired,
  editSticker: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;