import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import TextField from 'material-ui/TextField';

const TextFieldExampleSimple = () => (
  <div>
    <TextField defaultValue="Edward  Vidaurri"/>
  </div>
);
class App extends Component {
  render() {
    return (

      <MuiThemeProvider>
        <TextFieldExampleSimple />
      </MuiThemeProvider>
    );
  }
}

export default App;
