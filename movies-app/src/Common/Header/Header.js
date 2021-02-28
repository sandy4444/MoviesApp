import React, { Component, useState } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Header = () => {
  const [modalState, setModalState] = useState(false);
  const [tabState, setTabState] = useState(false);

  return (
    <div>
      <header className="app-header">
        <div className="login-button">
          <Button
            variant="contained"
            color="default"
            onClick={(e) => setModalState(true)}
          >
            Login
          </Button>
        </div>
      </header>
      <Modal
        ariaHideApp={false}
        isOpen={modalState}
        contentLabel="LOGIN"
        onRequestClose={() => setModalState(false)}
      >
        <Tabs
          value={tabState}
          indicatorColor="primary"
          textColor="primary"
          onChange={() => setTabState(1)}
          aria-label="disabled tabs example"
          centered color = "red"
        >
          <Tab label="Active" onClick={() => setTabState(0)} />
          <Tab label="Disabled" onClick={() => setTabState(1)} />
        </Tabs>
      </Modal>
    </div>
  );
};

export default Header;
