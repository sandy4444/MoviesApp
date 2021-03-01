import React, { Component, useState } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import PropTypes from 'prop-types';

const TabContainer = function (props) {
  return (
    <Typography component="div" className="form-align">
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

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
          centered
          color="red"
        >
          <Tab label="LOGIN" onClick={() => setTabState(0)} />
          <Tab label="SIGN UP" onClick={() => setTabState(1)} />
        </Tabs>
        <div className="container center">
         {tabState === 0 &&
          <TabContainer>
            <FormControl required>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" type="text"></Input>
            </FormControl>
            <br></br>
            <br></br>
            <FormControl required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password"></Input>
            </FormControl>
            <br></br>
            <br></br>
            <Button
              variant="contained"
              color="default"
              onClick={(e) => setModalState(false)}>Login</Button>
          </TabContainer>
} 
            {tabState === 1 && 
              <TabContainer>
                        <FormControl required>
                          <InputLabel htmlFor="username">Username</InputLabel>
                          <Input id="username" type="text"></Input>
                        </FormControl>
                        <br></br>
                        <br></br>
                        <FormControl required>
                          <InputLabel htmlFor="password">Password</InputLabel>
                          <Input id="password" type="password"></Input>
                        </FormControl>
                        <br></br>
                        <br></br>
                        <FormControl required>
                          <InputLabel htmlFor="email">Email</InputLabel>
                          <Input id="email" type="email"></Input>
                        </FormControl>
                        <br></br>
                        <br></br>
                        <FormControl required>
                          <InputLabel htmlFor="phn">Phone No</InputLabel>
                          <Input id="phn" type="number"></Input>
                        </FormControl>
                        <br></br>
                        <br></br>
                        <Button
                          variant="contained"
                          color="default"
                          onClick={(e) => setModalState(false)}>Register</Button>
                      </TabContainer> 
            }    
        </div>
      </Modal>
    </div>
  );
};

export default Header;
