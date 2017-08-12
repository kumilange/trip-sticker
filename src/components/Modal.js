import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Textfield } from 'react-mdl';
import './Modal.css';

const Modal = (props)=> {
  return (
    <div>
      <Dialog open={props.isModalOpen}>
       <DialogTitle>Make a sticker!</DialogTitle>
        <DialogContent>
          <Textfield
            onChange={(e) => {props.inputCountry(e.target.value)}}
            label="Country"
            floatingLabel
            style={{width: '240px'}}
          />
          <Textfield
            onChange={(e) => {props.inputCity(e.target.value)}}
            label="City"
            floatingLabel
            style={{width: '240px'}}
          />
          <Textfield
            onChange={(e) => {props.inputNote(e.target.value)}}
            label="Note"
            floatingLabel
            style={{width: '240px'}}
          />
          <Textfield
            onChange={(e) => {props.inputUsername(e.target.value)}}
            label="Your name"
            floatingLabel
            style={{width: '240px'}}
          />
        </DialogContent>
        <DialogActions>
          <Button type='button' onClick={()=> props.saveStickerInfo(props.sticker)} raised accent ripple>Save Sticker</Button>
          <Button type='button' onClick={props.closeModal} raised ripple>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;