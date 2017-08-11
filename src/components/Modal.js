import React, { Component } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Textfield } from 'react-mdl';
import './Modal.css';

const Modal = (props)=> {
  return (
    <div>
      <Dialog open={props.isModalOpen}>
       <DialogTitle>Make a sticker!</DialogTitle>
        <DialogContent>
          <Textfield
            onChange={() => {}}
            label="Country"
            floatingLabel
            style={{width: '240px'}}
          />
          <Textfield
            onChange={() => {}}
            label="City"
            floatingLabel
            style={{width: '240px'}}
          />
          <Textfield
            onChange={() => {}}
            label="Note"
            floatingLabel
            style={{width: '240px'}}
          />
          <Textfield
            onChange={() => {}}
            label="Your name"
            floatingLabel
            style={{width: '240px'}}
          />
        </DialogContent>
        <DialogActions>
          <Button type='button' onClick={()=> props.saveStickerInfo(props.position)}>Save Sticker</Button>
          <Button type='button' onClick={props.closeModal}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;