//import React from "react";
import React, { Component } from "react";
import { Button, LinearProgress, TextField } from "@material-ui/core";
import {
  createUserWithEmailAndPassword,
  signinWithEmail,
  signinWithGoogle,
} from "./firebase";
import GoogleButton from "react-google-button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { accountInfo } from "./firebase";

export function LoginDialog(props) {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    let callback = () => {
      if ("updateCount" in props) {
        props.updateCount();
        console.log("Force update");
      }
  
      if ("callback" in props) {
        props.callback();
        console.log("Execute callback");
      }
    };
  
    let data = {
      name: "",
      email: "",
      password: "",
    };
  
    const signup = (data) => {
      createUserWithEmailAndPassword(
        data.name,
        data.email,
        data.password,
        callback
      );
      handleClose();
    };
    const signin = (data) => {
      signinWithEmail(data.email, data.password, callback);
      handleClose();
    };
  
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          style={{ color: "white", background: "#DDA04B", margin: "auto", bottom: "12px", position: "fixed" }}
        >
          {accountInfo.signed ? accountInfo.name : "Sign in / sign up"}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <TextField
              id="standard-basic"
              label="name"
              onChange={(e) => {
                data.name = e.target.value;
              }}
            />
            <TextField
              id="standard-basic"
              label="email"
              onChange={(e) => {
                data.email = e.target.value;
              }}
            />
            <TextField
              id="standard-basic"
              label="password"
              type="password"
              onChange={(e) => {
                data.password = e.target.value;
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => signup(data)}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => signin(data)}
            >
              Sign In
            </Button>
            <GoogleButton
              onClick={() => {
                signinWithGoogle(callback);
                handleClose();
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}
