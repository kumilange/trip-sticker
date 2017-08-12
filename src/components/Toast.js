import React from 'react';
import { Snackbar } from 'react-mdl';

import './Toast.css';

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.state = { isSnackbarActive: false };
  }

  componentDidMount() {
    this.handleShowSnackbar();
  }

  handleShowSnackbar() {
    this.setState({ isSnackbarActive: true });
  }
  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }
  render() {
    const { isSnackbarActive } = this.state;
    return (
      <div>
        <Snackbar
          active={isSnackbarActive}
          timeout={8000}
          onTimeout={this.handleTimeoutSnackbar}>
          <span>★ How To Use this app</span><br/>
          <span>（1）Click anywhere you wanna visit on the map</span><br/>
          <span>（2）Make a sticker</span><br/>
          <span>（3）Stack your trip stickers and plan trips!</span>
        </Snackbar>
      </div>
    );
  }
}

export default Toast;