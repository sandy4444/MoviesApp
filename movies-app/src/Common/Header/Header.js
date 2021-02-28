import React, { Component, useState } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';


const Header = () => {

    const [modalState, setModalState] = useState(false);

  return (
    <div>
      <header className="app-header">
        <div className="login-button">
          <Button variant="contained" color="default" onClick = {(e) => setModalState(true)}>
            Login
          </Button>
        </div>
      </header>
      <Modal ariaHideApp ={false}  isOpen = {modalState} contentLabel = "LOGIN"  onRequestClose ={() =>setModalState(false) } />
    </div>
  );
};

export default Header;
