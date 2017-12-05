import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

//Hamburger Menu
const IconMenuExampleSimple = () => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Send feedback" animated/>
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>

  </div>
);

//Text field where name label moves to top.
const TextFieldExampleSimple = () => (
  <div>
    <TextField
    floatingLabelText="Name"
    />
  </div>
);

//Raised buttons.
  const style = {
  margin: 12,
  };
const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Primary" primary={true} />
    <RaisedButton label="Secondary" secondary={true}style={style} />

    <br/><br/><br/>
    <RaisedButton label="Full width" fullWidth={true} />
  </div>
  );

class App extends Component {
  render() {
    return (

      <MuiThemeProvider>
        <TextFieldExampleSimple />
        <IconMenuExampleSimple/>
        <RaisedButtonExampleSimple/>
      </MuiThemeProvider>
    );
  }
}

export default App;
