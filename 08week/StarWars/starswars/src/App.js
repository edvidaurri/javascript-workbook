import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

class App extends Component {
 state = {
     characters: null
 }
 componentDidMount(){
    const that = this;
    fetch('https://pokeapi.co/api/v2/pokemon-form/')
        .then((response) => response.json())
        .then((responseJson) => {
            that.setState({characters: responseJson.results})
        })
        .catch((error) => {
            console.error(error);
        });
 }
 constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
 renderCharacters(){
     const { characters } = this.state;
     if(characters && characters.length > 0){
         return characters.map((obj, key) =>{
             return <p key={key}>{obj.name}</p>
         })
     }
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pokemon</h1>
        </header>
          {this.renderCharacters()}
      </div>
      <MuiThemeProvider>
        <TextFieldExampleSimple />
        <IconMenuExampleSimple/>
        <RaisedButtonExampleSimple/>
      </MuiThemeProvider>
      <div>
        <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
